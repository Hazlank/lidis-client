import Vue from 'vue';
import Component from 'vue-class-component';

import { Mutation } from 'vuex-class';
import { InputComponent } from 'components/input';
import { TOGGLE_CONNECT } from 'store/types';


@Component({
  template: require('./connect.html'),
  components: {
    'lidis-input': InputComponent
  }
})
export class ConnectComponent extends Vue {
  private host: string = '127.0.0.1';
  private port: number = 6379;

  @Mutation(TOGGLE_CONNECT)
  private toggle_connect: () => void;

}
