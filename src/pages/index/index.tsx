import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.styl'

type IProps = {}

// type XButtonState = {
//   lists: string[]
// }

interface IState {
  lists: string[]
}

export default class Index extends Component<IProps, IState>{

  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      lists: ['x-button']
    }
  }

  goTo(item: String) {
    console.log(item)
    Taro.navigateTo({
      url: `page/model/${item}/${item}`
    })
  }

  render () {
    const { lists } = this.state
    return (
  //     <view class="controller">
  //   <view class="item" v-for="(item, index) in lists" :key="index" @click="goTo(item)" >{{ item }}</view>
  // </view>
      <View className="controller">
        {lists.map((item, index) => {
        return <View className="item" key={ String(index) } onClick={ this.goTo.bind(this, item) } >{ item }</View>
        })}
      </View>
      // <View className='index'>
      //   <Text>Hello world!</Text>
      // </View>
    )
  }
}
