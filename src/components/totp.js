export default {
  name: 'Totp',
  props: {
    msg: String
  },
  data: function(){
    return {
      secret: '',
      totp: '',
      resttime: 30,
      interval: null
    }
  },
  watch: {
    secret(val){
      window.localStorage.setItem('secret', val)
    }
  },
  mounted: function () {
    const secret = window.localStorage.getItem('secret')
    if(secret != "" && secret != "null"){
      this.secret = secret
    }
    this.interval = setInterval(this.updateTimer, 100)
  },
  methods: {
    getTotp(){
      const jsotp = require('jsotp');
      const totp = jsotp.TOTP(this.secret);
      return totp.now();
    },
    updateTimer(){
      this.resttime = 30 - Math.round((new Date()).getTime() / 1000) % 30
      this.totp = this.getTotp()
    }
  }
}
