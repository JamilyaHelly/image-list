import React from 'react';

class SearchInput extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value);

    // }

    constructor(props) {
        super(props);
        // entry degiskenine string girip default yazi ilk basta gosrete biliriz
        this.state = { entry: '' };
        //   (1 yontem state ulasabilmemiz icin) this.onFormSubmit=this.onFormSubmit.bind(this);
    }
    // (2 yontem state ulasabilmemiz icin) Arrow function cevirdik 
    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.entry)  (kullanicidan alindigi degeri consolo yazmak ) ;
        this.props.onSearchSubmit(this.state.entry);
    }
    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className='field'>
                        <div className='ui massive icon input'>
                            {/* 1. unconrtol form element */}
                            <input
                                type="text" 
                                placeholder='search...'
                                // onChange={this.onInputChange}
                                // 1. onChange={(event)=>console.log(event.target.value)}
                                // value sonuna .toUpperCase() ekleyerek kullanicidan girilen harflari buyuk hafr yapma sarti ekleme
                                onChange={(event) => this.setState({ entry: event.target.value })}
                                value={this.state.entry}
                            />
                            <i className='search icon' ></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;
