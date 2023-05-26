import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    msg: 'hello'
  },
  render(){
    return (
      <div>{this.msg}</div>
    )
  }
});
