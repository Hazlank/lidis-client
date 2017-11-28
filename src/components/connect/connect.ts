import Vue from 'vue';
import Component from 'vue-class-component';
import { InputComponent } from 'components/input';

@Component({
  template: require('./connect.html'),
  components: {
    'lidis-input': InputComponent
  }
})
export class ConnectComponent extends Vue {
  private host: string = '';

  private port: number = 0;

}
