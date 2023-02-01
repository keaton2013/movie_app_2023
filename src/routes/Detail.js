import React from "react";

class Detail extends React.Component {

    componentDidMount(){
        console.log('*componentDidMount() this.props:'+ JSON.stringify(this.props) );

        // const { location, history, match } = this.props;

        // console.log('*location:'+ location);
        // console.log('*history:'+ history);
        // console.log('*match:'+ match);

        // if(location.state === undefined){
        //     history.push('/');  
        // }

    }

    render() {
        console.log('*render() this.props:'+ JSON.stringify(this.props) );
        //const { location } = this.props;

        //return <h3>Movie Detail {location.state.title}</h3>;
        return <h3>movie detail</h3>
    }
}

export default Detail;