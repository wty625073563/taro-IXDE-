import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import cls from 'classNames'

import './x-button.styl'

interface XButtonProps {

}

interface XButtonState {
  isLoading: boolean,
  isSuccess: boolean
}

export default class XButton extends Component<XButtonProps, XButtonState> {
  config: Config = {
    navigationBarTitleText: 'button'
  }

  constructor() {
    super(...arguments)
    this.state = {
      isLoading: false,
      isSuccess: false
    }
  }
  // <view class="ix-btn" >
  //     <button plain :class="{
  //       'ix-btn_complete': true,
  //       'ix-btn_complete_loading': isLoading,
  //       'ix-btn_complete_success': isSuccess
  //     }" hover-class="ix-btn_complete_hover" @click="onClick">
  //       <text v-if="!isLoading && !isSuccess" >Complete Application</text>
  //       <block v-else-if="isLoading && !isSuccess">
  //         <view class="loading-ani" >
  //           <view></view><view></view><view></view><view></view>
  //         </view>
  //       </block>
  //       <text v-else>√</text>
  //     </button>
  //   </view>
  initCompleteBtnState(): void {
    this.setState({
      isLoading: false,
      isSuccess: false
    })
  }

  onClickCompleteBtn() {

  }

  generateCompleteBtnNode() {
    const { isLoading, isSuccess } = this.state
    if (!isLoading && !isSuccess) {
      return <Text>Complete Application</Text>
    } else if (isLoading && !isSuccess) {
      return <View className="loading-ani">
        <View></View><View></View><View></View><View></View>
      </View>
    } else {
      return <Text>√</Text>
    }
  }

  render () {
    const { isLoading, isSuccess } = this.state
    return (
      <View className="ix-btn">
        <Button plain className={cls({
          'ix-btn_complete': true,
          'ix-btn_complete_loading': isLoading,
          'ix-btn_complete_success': isSuccess
        })} >
          { this.generateCompleteBtnNode() }
        </Button>
      </View>
    )
  }
}