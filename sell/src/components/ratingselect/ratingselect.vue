<template>
  <div class="ratingselect">
  	<div class="rating-type border-1px">
  	  <span class="block positive" :class="{'active':selectType === 2}" @touchend="select(2)">
  	  	{{desc.all}}
  	  	<span class="count">{{ratings.length}}</span>
  	  </span>
  	  
  	  <span class="block positive" :class="{'active':selectType === 1}" @touchend="select(1)">
  	    {{desc.positive}}
  	    <span class="count">{{positive.length}}</span>
  	  </span>
  	  <span class="block negative" :class="{'active':selectType === 0}" @touchend="select(0)">
  	  	{{desc.negative}}
  		  <span class="count">{{negative.length}}</span>
  	  </span>
  	</div>
  	<div class="switch" :class="{'on':onlyContent}" >
  	  <i class="icon-check_circle" @touchend="toggleContent"></i>
  	  <span class="text">只看有内容的评价</span>
  	</div>
  </div>
  
</template>

<script>
	const POSITIVE = 0
	const NEGATIVE = 1
	const ALL = 2
	export default {
		props: {
			ratings: {
				type: Array,
				default() {
					return []
				}
			},
			selectType: {
				type: Number,
				default: ALL
			},
			onlyContent: {
				type: Boolean,
				default: false
			},
			desc: {
				type: Object,
				default() {
					return {
						all: '全部',
						positive:'满意',
						negative:'不满意'
					}
				}
			}
		},
		methods: {
			select(type) {
				this.$emit('select', type)
			},
			toggleContent() {
				this.$emit('toggle')
			}
		},
		computed: {
			positive() {
				return this.ratings.filter((rating) => {
					return rating.rateType === POSITIVE
				})
			},
			negative() {
				return this.ratings.filter((rating) => {
					return rating.rateType === NEGATIVE
				})
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
  @import "../../common/stylus/mixin.styl"
  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7,17,27,0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77,85,93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160 ,220,0.2)
          &.active
            background: rgb(0,160,220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7,17,27,0.1)
      color: rgb(147,153,159)
      font-size: 0
      &.on
        .icon-check_circle
          color : #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        font-size: 12px
        vertical-align: top
        
        
</style>
