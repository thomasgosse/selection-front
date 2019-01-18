import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toBeDefined();
  });
});
