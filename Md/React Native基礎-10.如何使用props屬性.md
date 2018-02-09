# React Native基礎-10.如何使用props屬性


## 引用
- [中文官方](https://reactnative.cn/docs/0.50/props.html)
- [PropTypes React Native is not an object](https://www.evernote.com/shard/s704/sh/cbe794a0-bf6a-44f3-8fc8-6c909e30091d/dd7a09d997c452c03cc737f54ba321d8)
- [延展操作符(Spread operator)](https://www.evernote.com/shard/s704/sh/4ccde43a-453f-4faf-8b3d-0a7df8f36258/9d7829202db82f947521f54a13433c43)

## Prop(屬性)
### 介紹
- Component取值的物件
- 可以藉由defaultProps設定預設值
- 使用時可以不需要定義

### 使用
1. 在需要使用的組件中使用this.prop.xxxx指定需要綁定的屬性

		export default class PropComponent extends Component {
		    render() {
		        return (<Text style={{
		            fontSize: 20,
		            backgroundColor: 'red'
		        }}>> text: {this.props.content}</Text>)
		    }
		}

2. 接著在外部就可以直接指定屬性,並傳入值

		export default class UsePropComponent extends Component {
		    render() {
		        return <View style={styles.container}>
		            <PropComponent content='prop is nice' />
		        </View>
		    }
		}
		
3. PropComponent就會根據傳入content屬性的值render了

## DefaultProps
### 介紹
- 	在外部使用的Component沒有傳入屬性相對的值時,可以給予屬性一個預設的值

### 使用
1. 在需要的Component定義一個static propType變數

		export default class PropComponent extends Component {
		    static defaultProps = {
		        content: 'default content'
		    }
		
		    static propTypes = {
		        content: PropTypes.string
		    }
		
		    render() {
		        return (<Text style={{
		            fontSize: 20,
		            backgroundColor: 'red'
		        }}>> text: {this.props.content}</Text>)
		    }
	}
	
2. 在外部使用時,不傳入值

		export default class UsePropComponent extends Component {
		    render() {
		        return <View style={styles.container}>
		            <PropComponent />
		        </View>
		    }
		}
		
3. PropComponent依然會顯示預設值
	
		text: default content	
		

## PropTypes

### 介紹
- 由於js是動態語言,執行時並不會有類型資訊,有時需要有一個方式來限制prop應該是屬於哪種型別,PropTypes應此而生

- 可以讓變數變得比較規範、好懂、並且更好Debug

- 可以限制外部Component為必須賦予值(isRequired)


### 使用
1. 首先安裝package,對,你沒看錯,安裝!(React v15.5以前是放在react包底下)

		> npm install prop-types
		
2. 在需要使用的文件導入

		import PropTypes from 'prop-types';
		
3. 限制類型

		export default class PropComponent extends Component {
		    static defaultProps = {
		        content: 'default content',
		        // contentBool: true
		    }
	    static propTypes = {
	        content: PropTypes.string,
	        contentBool: PropTypes.string, // 執行後會出現黃色警告
	        contentNumberRequire: PropTypes.string.isRequired // 執行後會出現黃色警告,需要賦予值
	    }
		    render() {
		        return (<Text style={{
		            fontSize: 20,
		            backgroundColor: 'red'
		        }}>> text: {this.props.content}</Text>)
		    }
		}
4. 不管是defaultProps給錯,或是外部Component使用時傳錯,執行時都會有黃色的錯誤告訴使用者傳錯值了

		export default class UsePropComponent extends Component {
		    render() {
		        return <View style={styles.container}>
		            <PropComponent content='prop is nice' />
		            
		            {/* run time warning */}
		            <PropComponent contentBool={'value is invalid'} />
		        </View>
		    }
		}

## 運用展開運算子(Spread operator)傳遞參數
### 介紹
- ES6語法
- 省去冗余的object.propName傳值方式
- 使用...開頭代表要使用展開運算子

### 使用
1. 在需要使用的地方,定義物件,並指定相對應的值

		export default class UsePropComponent extends Component {
		    render() {
		        var params = {
		            content: 'this is spread operator content',
		            contentBool: true,
		            contentNumberRequire: 'this is a require spread operator content'
		        }
		        return <View style={styles.container}>
		            {/* spread operator */}
		            <PropComponent {...params} />
		        </View>
		    }
		}
2. 就會根據傳入的key/value render了


## 解構賦值(Object Destructuring)
### 介紹
- ES6語法
- 可以將物件裡面的東西一個一個拿出來

### 使用

	export default class UsePropComponent extends Component {
	    render() {
	        var params = {
	            content: 'this is spread operator content',
	            contentBool: true,
	            contentNumberRequire: 'this is a require spread operator content'
	        }
	        var { content, contentNumberRequire } = params;
	
	        return <View style={styles.container}>
	        
			      {/* object destructuring */}
	            <PropComponent content={content} />
	        </View>
	    }
	}

