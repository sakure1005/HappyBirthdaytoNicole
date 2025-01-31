// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "怎么没关掉?",
        "别急 故事才刚刚开始",
        "送给我o(￣▽￣)ｄ",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最爱的静静",  // 同上...
        "生日快乐 我的女孩",
        "今天是你23岁生日",
        "也是我们在一起的",
        "第592天了哦",
        "哈哈 不知不觉就这么久了",
        "这是我们在一起",
        "你过的第二个生日",
        "虽然两次都不在你身边",
        "~~o(>_<)o ~~",
        "悄悄许个愿",
        "以后的每个生日",
        "我们都要陪在彼此身边",
        "一起吃生日蛋糕(≧ω≦)/",
        "再整点RIO",
        "干杯~",
        "哈哈 你喝醉的样子真可爱",
        "喜欢你撒娇的样子",
        "喜欢你的所有",
        "有你真好",
        "和你在一起的",
        "所有时光都灿烂耀眼",
        "疫情结束啦",
        "之后见面的频率会变的越来越多",
        "好期待呀",
        "三天后你就来北京了",
        "我要带你去玩遍所有好玩的",
        "吃遍所有好吃的",
        "未来的路还有很长",
        "约定好了 要一直在一起哦~",
        "啵啵(●´З｀●)",
        "By 廖同学",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "怎么没关掉?": "./imgs/52.jpg",
        "别急 故事才刚刚开始": "./imgs/53.jpg",
        "送给我o(￣▽￣)ｄ": "./imgs/54.jpg", 
        "最爱的静静": "./imgs/微信图片_20230209173313.jpg",
        "生日快乐 我的女孩": "./imgs/56.jpg",
        "今天是你23岁生日": "./imgs/57.jpg",
        "也是我们在一起的": "./imgs/58.jpg",
        "第592天了哦": "./imgs/59.jpg",
        "哈哈 不知不觉就这么久了": "./imgs/60.jpg",
        "这是我们在一起": "./imgs/61.jpg",
        "你过的第二个生日": "./imgs/62.jpg",
        "虽然两次都不在你身边": "./imgs/63.jpg",
        "~~o(>_<)o ~~": "./imgs/64.jpg",
        "悄悄许个愿": "./imgs/65.jpg",
        "以后的每个生日": "./imgs/66.jpg",
        "我们都要陪在彼此身边": "./imgs/67.jpg",
        "一起吃生日蛋糕(≧ω≦)/": "./imgs/68.jpg",
        "再整点RIO": "./imgs/69.jpg",
        "干杯~": "./imgs/70.jpg",
        "哈哈 你喝醉的样子真可爱": "./imgs/71.jpg",
        "喜欢你撒娇的样子": "./imgs/72.jpg",
        "喜欢你的所有": "./imgs/73.jpg",
        "有你真好": "./imgs/74.jpg",
        "和你在一起的": "./imgs/75.jpg",
        "所有时光都灿烂耀眼": "./imgs/76.jpg",
        "疫情结束啦": "./imgs/77.jpg",
        "之后见面的频率会变的越来越多": "./imgs/78.jpg",
        "好期待呀": "./imgs/79.jpg",
        "三天后你就来北京了": "./imgs/80.jpg",
        "我要带你去玩遍所有好玩的": "./imgs/81.jpg",
        "吃遍所有好吃的": "./imgs/82.jpg",
        "未来的路还有很长": "./imgs/83.jpg",
        "约定好了 要一直在一起哦~": "./imgs/84.jpg",
        "啵啵(●´З｀●)": "./imgs/85.jpg",
        "By 廖同学": "./imgs/86.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点击获取静静的专属礼物",
        play: "音乐",
        bannar_coming: "灯光",
        balloons_flying: "好像还少点东西",
        cake_fadein: "蛋糕来了",
        light_candle: "蜡烛点上",
        wish_message: "生日快乐",
        story: "点击结束页面",
    }
};
