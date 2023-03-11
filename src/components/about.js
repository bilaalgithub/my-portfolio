import React, { componenet } from 'react';


class about extends componenet {
    render() {

        if(this.props.data){
            var name = this.props.data.name;
            var profilepic = "images/"+this.props.data.images;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var phone = this.props.data.phone;
            var email =this.props.data.email;
            var cvDownload = this.props.data.cvdownload;

        }

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Nordic Giant Profile pic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="colums contact-details">
                                <h2>Contact Deatails</h2>
                                <p className="address">
                                    <span>{name}</span><br />
                                    <span>{phone}</span><br />
                                    <span>{email}</span><br />
                                    <span>{city}</span><br />
                                    <span>{"willing to relocate"}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={cvDownload} className="button" target="_blank"><i className="fa fa-download"></i> </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default about;