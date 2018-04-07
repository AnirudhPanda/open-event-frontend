import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Modules');
  },
  model() {
    return this.get('store').queryRecord('module', {});
  }
});
