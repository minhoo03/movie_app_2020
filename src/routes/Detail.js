import React from "react"

// react-router-dom에 의해 생성된 props
// 주소로 전달받은 props는 location 안에 있다... props > location > state

class Detail extends React.Component {
// 카드를 클릭시에만 Router로 정보 전달하므로 url 입력 접속시 state == undefined
// react-router-dom에 의해 생성된 props인데 url 관리는 history에서 한다
    componentDidMount(){
        const { location, history } = this.props
        if(location.state === undefined){
            history.push('/')
        }
    }

    // render 후에 다시 url 접근시에 Didmount에 의해 
    // location으로 띄우던 화면에서 state만 간단히 변경하기에
    // 원래 보이던 화면을 보이는 도중에 location이 존재하지 않게 되어 오류난다

    // url 접근시에 return하던 값을 모두 비워버려 오류를 없앤다

    render(){
        const { location } = this.props
        
        if(location.state){
            return (
                <div>
                    <div>{location.state.title}</div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                </div>
            )
        } else{
            return null
        }
    }
}

export default Detail