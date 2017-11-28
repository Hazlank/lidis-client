import Vue from 'vue';
import Component from 'vue-class-component';

import { Mutation, Getter } from 'vuex-class';
import { Watch } from 'vue-property-decorator';
import { InputComponent } from 'components/input';

import {
  SET_FILTERTEXT
} from 'store/types';

// TODO: 调整一下历史记录的数据结构，保证一个新数据被置顶

@Component({
  template: require('./search.html'),
  components: {
    'lidis-input': InputComponent
  }
})
export class SearchComponent extends Vue {

  private historySet: Set<string> = new Set();

  private value: string = '';

  @Getter('filterText')
  private readonly filterText: string;

  @Mutation(SET_FILTERTEXT)
  private setFilterText: (filterText: string) => void;

  public get history(): string[] {
    return Array.from(this.historySet);
  }

  private handleFocus () {
    console.log('focus!');
  }

  private pushHistory(newVal) {
    this.historySet.add(newVal);
  }

  public submit(filterText: string) {
    this.setFilterText(filterText);
    this.pushHistory(filterText);
    // Logger
    console.log(`[Getter]  ${this.filterText}`);
  }
}
