import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: require('./layout.html'),
})
export class LayoutComponent extends Vue {

  mode: string = process.env.ENV;

}
