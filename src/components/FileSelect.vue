<template>
  <div class="mb-3 file-field">
    <label :for="name" class="form-label d-flex align-items-center">
      {{ label }}
      <div
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-html="true"
          :data-bs-title="`
                <span>${$t(`Допустимые форматы: ${allowedExtensions.join(', ')}`)}</span>
                <br>
                <span>${ $t(`Общий объём файлов не должен превышать ${limit} МБ.`) }</span>`"
          class="info-files info-files-tooltip ms-2">
        <img height="16" :src="Warning" alt="">
      </div>
    </label>
    <div class="selectFiles">
      <div class="file-input form-control" :class="{'is-invalid': errors && errors.items.find((x) => x.field === name)}">
        <label>
          <input
              :data-testid="name"
              :accept="allowedExtensions.map(el => el=`.${el}`).join(', ')"
              :disabled="value.length >=5 || fileSize > limitFiles"
              type="file"
              :id="name"
              ref="files"
              multiple
              v-on:change="handleFilesUpload()"
          />
        </label>
      </div>
      <div ref="fileform" class="files-button-wrap">
        <button :class="['files-button', fileDropClass]" type="button" @click="addFiles()">
          <div class="files-button-green">
<!--            <img :src="Plus" alt="plus">-->
            <Plus />
            <span>{{$t('Выберите файл')}}</span>
          </div>
          <span v-if="dragAndDropCapable" class="files-button-grey">{{$t('или перетащите его сюда')}}</span>
        </button>
      </div>

      <div v-if="errors" class="invalid-feedback">
        {{ errors && errors.items && errors.items.find((x) => x.field === name) ? errors.items.find((x) => x.field === name).msg : '' }}
      </div>
      <div class="form-text">{{ description }}</div>

      <div class="files-list">
        <div :key="`fileSelect-${key}`" v-for="(file, key) in value" class="file-item">
          <div class="d-flex align-items-center">
<!--            <img class="me-4" :src="File" alt="file">-->
            <Document class="me-4" />
            <h4 class="h4-2 mb-0">{{ file.name }}</h4>
          </div>
          <span class="remove-file" @click="removeFile( key )"><img :src="Close" alt=""></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Plus from '@svg/Plus.vue';
import Document from '@svg/Document.vue';
import Close from '@svg/close.svg';
import Warning from '@svg/error-warning.svg';

import {Tooltip} from 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default {
  name: "UiFileSelect",
  components: { Plus, Document },
  props: {
    value: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: 'input-name'
    },
    label: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    allowedExtensions: {
      default: () => ['doc','docx','pdf','tiff','jpg','jpeg','png'],
      // /(.doc|.docx|.pdf|.tiff|.jpg|.jpeg|.png)$/i,
      type: Array,
    },
    limit: {
      default: 10, //MB
      type: Number
    }
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  data(){
    return {
      selectTooltip: null,
      Close,
      Warning,
      fileDropClass: '',
      files: [],
      dragAndDropCapable: false,
      // limitFiles: 10485760,
    }
  },
  computed: {
    allowedExtensionsRegExp() {
      return new RegExp(`\.(${this.allowedExtensions.join('|')})$`, 'i')
    },
    limitFiles () {
      return this.limit * 1024 * 1024
    },
    fileSize() {
      let sum = 0
      this.files.forEach(el => {
        sum = sum + el.size
      });
      return sum
    }
  },
  mounted() {
    const tooltipTrigger = document.querySelector('.info-files-tooltip')
    this.selectTooltip = new Tooltip(tooltipTrigger)

    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if( this.dragAndDropCapable ){
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
        this.$refs.fileform.addEventListener(evt, function(e){
          e.dataTransfer.effectAllowed = "copyMove";
          this.fileDropClass = evt == 'dragover' ? 'dragover' : 'dragleave'
          e.preventDefault();
          e.stopPropagation();
        }.bind(this), false);
      }.bind(this));
      this.$refs.fileform.addEventListener('drop', function(e){
        this.files = this.value
        for( let i = 0; i < e.dataTransfer.files.length; i++ ){
          if (this.checkFile(e.dataTransfer.files[i])) {
            this.files.push( e.dataTransfer.files[i] );
          }
        }
        this.$emit('input', this.files)
      }.bind(this));
    }
  },
  methods: {
    checkFile(file) {
      let ext = ""
      let parts = file.name.split('.');
      if (parts.length > 1) ext = parts.pop();

      if (file.size > this.limitFiles) {
        this.selectTooltip.show()
        return false
      }

      // Allowing file type

      if (!this.allowedExtensionsRegExp.exec(`.${ext}`)) {
        this.selectTooltip.show()
        return false;
      }

      return true
    },
    determineDragAndDropCapable(){
      let div = document.createElement('div');
      return ( ( 'draggable' in div )
              || ( 'ondragstart' in div && 'ondrop' in div ) )
          && 'FormData' in window
          && 'FileReader' in window;
    },
    addFiles(){
      this.$refs.files.click();
    },

    handleFilesUpload(){
      this.files = this.value
      let uploadedFiles = this.$refs.files.files;

      for( let i = 0; i < uploadedFiles.length; i++ ){
        if (this.checkFile(uploadedFiles[i])) {
          this.files.push( uploadedFiles[i] );
        }
      }

      this.$emit('input', this.files)
    },

    removeFile( key ){
      this.files.splice( key, 1 );
    }
  }
}
</script>

<style lang="scss">
.file-field {

  --bs-file-primary: var(--bs-primary);

  .selectFiles {
    input[type="file"] {
      position: absolute;
      top: -5000px;
    }

    .file-input {
      position: absolute;
      top: -5000px;
    }

    .form-control.is-invalid ~ .files-button-wrap .files-button {
      border-color: var(--bs-danger);
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23ff4136'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23ff4136' stroke='none'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right calc(0.375em + 0.1875rem) center;
      background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    }

    .files-button {
      width: 100%;
      background: #FCFCFD;
      border: 1px dashed #8596A4;
      border-radius: 8px;
      height: 135px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &.dragover {
        cursor: copy;
        border-width: 3px;
        background: #f4f4f4;
      }

      &-green {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        color: var(--bs-file-primary);
        margin-bottom: 12px;

        img, svg {
          margin-right: 8px;
          path {
            fill: var(--bs-file-primary);
          }
        }
      }

      &-grey {
        display: block;
        font-weight: 250;
        font-size: 17px;
        line-height: 25px;
        letter-spacing: -0.015em;
        color: #797979;
      }
    }

    .files-list {
      margin-top: 24px;
    }

    .file-item {
      border: 1px solid #8596A4;
      border-radius: 16px;
      padding: 24px 32px;
      margin-bottom: 24px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg path {
        fill: var(--bs-file-primary);
      }
      .remove-file {
        cursor: pointer;
      }
    }
  }
  .info-files {
    display: flex;
    align-items: center;
  }
}
</style>
