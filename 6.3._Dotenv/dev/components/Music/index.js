import React, { Component } from 'react';

import { getArtist } from '../../api';

class Music extends Component {
    state = {
        search: '',
        artists: [],
        isLoading: false,
        error: null,
    };

    getData() {
        this.setState({
            isLoading: true,
            error: null,
        });
        const { search } = this.state;
        getArtist(search)
            .then((response) => {
                this.setState({
                    artists: response.data.artists,
                });
            })
            .catch((reject) => {
                this.setState({
                    error: `Server error ${reject.response.statusText}` 
                });
            })
            .finally(() => {
                this.setState({
                    isLoading: false, 
                });
            });
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value,
        });
    }

    handleSumbit = (e) => {
        e.preventDefault();

        this.getData();
    }

    render() {
        const { artists, search, isLoading, error } = this.state;
        return (
            <div>
                <section>
                    <form onSubmit={this.handleSumbit}>
                        <input
                          type="search"
                          placeholder="artist name"
                          value={search}
                          onChange={this.handleChange}
                        />
                        <button disabled={isLoading}>search</button>
                    </form>
                </section>
                { error }
                <section>
                    {
                        isLoading ? (
                            <p>loading…</p> 
                        ) : null
                    }
                    {
                        artists ? (
                            artists.map(item => (
                                <div key={item.idArtist}>
                                   <h2>{item.strArtist}</h2>
                                   <img src={item.strArtistBanner} alt={item.strArtist} />
                                   <p>{item.strBiographyEN}</p>
                                </div>
                            ))
                        ) : (
                            <p>Unfortunatelly, we can't find</p>
                        )
                    }
                </section>
            </div>
        )
    }
}

export default Music;