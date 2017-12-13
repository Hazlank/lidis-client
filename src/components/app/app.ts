import Vue from 'vue';
import Component from 'vue-class-component';

import { Getter } from 'vuex-class';

import { LayoutComponent } from 'components/layout';
import { SearchComponent } from 'components/search';
import { EditorComponent } from 'components/editor';
import { ConnectComponent } from 'components/connect';
import { KeysComponent } from 'components/keys';

@Component({
  template: require('./app.html'),
  components: {
    'layout': LayoutComponent,
    'search': SearchComponent,
    'editor': EditorComponent,
    'connect': ConnectComponent,
    'keys': KeysComponent
  }
})
export class App extends Vue {
  private keys = [];


  @Getter('showConnect')
  private readonly showConnect: boolean;


  private async mounted() {
    const resp = await fetch('http://localhost:3132?cm=keys&args=*');
    const keys = await resp.json();
    this.keys = keys;
  }
}
