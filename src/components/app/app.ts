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

  @Getter('showConnect')
  private readonly showConnect: boolean;

}
