<script>
  export default {
    methods: {
      getRouterNameByCategory: function (Category) {
        const map = {
          '1': 'EssayDetail',
          '2': 'SerialDetail',
          '3': 'QuestionDetail',
          '4': 'Music',
          '5': 'Movie'
        }
        return Category ? map[Category] : ''
      },
      getTagByCategory: function (Category) {
        const map = {
          '0': '插画',
          '1': 'ONE STORY',
          '2': '连载',
          '3': '问答',
          '4': '音乐',
          '5': '影视'
        }
        return Category ? map[Category] : ''
      },
      getTag: function (node) {
        let taglist = node.tag_list
        let tag = ''
        if (taglist.length > 0) {
          tag = taglist[0].title
        } else {
          tag = this.getTagByCategory(node.category)
        }
        return tag
      },
      getAuthorName: function (node) {
        let retStr
        if (node.author) {
          retStr = node.author.user_name
          if (node.category !== '3') {
            retStr = '文/' + retStr
          }
        }
        return retStr
      },
      getTimeBefore: function (node) {
        let now = new Date()
        let diffValue = (now.getTime() - Date.parse(node.post_date)) / 1000
        let retStr
        if (diffValue / (24 * 3600) >= 1) {
          retStr = '' + parseInt(diffValue / (24 * 3600)) + '天前'
        } else if (diffValue / 3600 >= 1) {
          retStr = '' + parseInt(diffValue / 3600) + '小时前'
        } else if (diffValue / 3600 < 1) {
          retStr = '刚刚'
        }
        return retStr
      }
    }
  }
</script>
