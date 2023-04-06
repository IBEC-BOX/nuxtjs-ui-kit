import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const DEFAULT_OPTIONS = {
    placement: 'auto',
    title: '',
    trigger: 'hover focus',
    html: true,
    variant: 'primary',
    size: 'md'
};

const optionsGenerate = (binding) => {
    const variant = binding.value.variant ? `tooltip-${binding.value.variant}` : `tooltip-${DEFAULT_OPTIONS.variant}`
    const size = binding.value.size ? `tooltip-${binding.value.size}` : `tooltip-${DEFAULT_OPTIONS.size}`

    const options = {
        title: (binding.value.message ? binding.value.message : binding.value) || DEFAULT_OPTIONS.title,
        placement: binding.value.placement || DEFAULT_OPTIONS.placement,
        trigger: binding.value.trigger || DEFAULT_OPTIONS.trigger,
        customClass: `${variant} ${size}`,
        html: binding.value.html || DEFAULT_OPTIONS.html // добавляем html опцию
    };
    return options
}

export default {
    inserted (el, binding) {
        const options = optionsGenerate(binding)
        const tooltip = new Tooltip(el, options);
        el._tooltip = tooltip;
    },
    update (el, binding) {
        const options = optionsGenerate(binding)
        if (el._tooltip) {
            el._tooltip.dispose();
            const tooltip = new Tooltip(el, options);
            el._tooltip = tooltip;
        }
    },
    unbind(el) {
        if (el._tooltip) {
            el._tooltip.dispose();
        }
    },
}
