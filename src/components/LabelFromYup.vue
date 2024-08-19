<script setup>
// eslint-disable-next-line no-undef
defineProps({
  as: {
    type: String,
    default: 'label',
    validator(value) {
      return ['label', 'legend', 'span'].includes(value);
    },
  },
  name: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  schema: {
    type: Object,
    default: () => null,
  },
});
</script>
<template>
  <component
    :is="as"
    class="label"
    :for="name || $attrs.for || null"
  >
    <slot name="prepend" />
    <slot>
      <pre
        v-if="!schema.fields?.[name]"
      >
      Etiqueta não encontrada para `{{ name }}`
    </pre>
      <template v-else>
        <template v-if="schema">
          {{ schema.fields?.[name]?.spec?.label || `Campo: ${name}` }}
        </template>&nbsp;<span
          v-if="required || schema.fields[name]?.spec?.presence === 'required'"
          class="required"
        >*</span>
      </template>
    </slot>
    <slot name="append" />
  </component>
</template>