import { Injectable } from '@angular/core';
import {wxApi} from 'src/app/service/wx.service';

const randomStr = Symbol()
const initWechatSdk = Symbol()
const initSha1 = Symbol()
const initToken = Symbol()
const sign = Symbol()


@Injectable({
  providedIn: 'root'
})
export class wxService {
  appId: string = 'wx188599298e4b9f26'
  secret: string = '1193911e4f7bd904ffc6b2d7e69b9aea'
  wxSdk: any
  sha1: any
  wx: any
  token: string

  constructor(
    private _api: wxApi,
  ) { }

  init () {
    Promise.all([
      this[initWechatSdk](),
      this[initToken](),
      this[initSha1]()
    ]).then(() =>{
      this[sign]()
    }, err=>{
      console.log(err, '-----err-----')
    })
  }

  [sign] () {
    if(!this.wx) return
    // timezone +8
    const timestamp = new Date().getTime().toString().substr(0,10)
    const nonceStr = this[randomStr](16)
    const url = window.location.href
    const tempStr = `jsapi_ticket=${this.token}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${url}`
    console.log(tempStr, '------tempStr----')
    const signature = this.sha1(tempStr)
    console.log(signature, '-----signature-----')

    this.wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: this.appId, // 必填，公众号的唯一标识
      timestamp, // 必填，生成签名的时间戳
      nonceStr, // 必填，生成签名的随机串
      signature,// 必填，签名
      jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表
    })

    this.wx.ready(res => {
      console.log(res, '-----ready-----')
    })

    this.wx.error(err => {
      console.log(err, '----error----')
    })

    
  }

  pay (id) {
    if(!this.wx) return
    // timezone +8
    const timestamp = new Date().getTime().toString().substr(0,10)

    this.wx.chooseWXPay({
      timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: this[randomStr](16), // 支付签名随机串，不长于 32 位
      package: 'prepay_id=' + id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType: 'SHA1', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: '', // 支付签名
      success: function (res) {
        // 支付成功后的回调函数
      }
    })
  }



  [initWechatSdk]() {
    this.wxSdk = document.createElement('script')
    this.wxSdk.type = "text/javascript"
    this.wxSdk.src = 'http://res.wx.qq.com/open/js/jweixin-1.6.0.js'
    document.getElementsByTagName('head')[0].appendChild(this.wxSdk)
    
    return new Promise(resolve=>{
      this.wxSdk.onload = async () => {
        this.wx = (window as any).wx
        resolve()
      }
    })
  }

  [initToken](){
    return new Promise(resolve=>{
      this._api.getAccessToken({
        appId: this.appId,
        secret: this.secret
      }).subscribe(({data:{ticket}})=>{
        this.token = ticket
        resolve()
      })
    })
  }

  [initSha1](){
    this.sha1 = document.createElement('script')
    this.sha1.type = "text/javascript"
    this.sha1.src = 'https://cdn.bootcss.com/js-sha1/0.6.0/sha1.min.js'
    document.getElementsByTagName('head')[0].appendChild(this.sha1)

    return new Promise(resolve=>{
      this.sha1.onload = async () => {
        this.sha1 = (window as any).sha1
        resolve()
      }
    })
  }

  [randomStr](len) {
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const count = chars.length
    let str='';
    for(let i=0; i<len; ++i){
      str += chars.charAt(Math.floor(Math.random() * count ));
    }
    return str;
  }

}
