import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        country: "",
        address: "",
        city: "",
        state: "",
        code: "",
        comments: true,
        candidate: false,
        offers: false,
        notify: ""
    });
    // console.log(formData)

    function onchangeHandler(event) {
        const { name, value, checked, type } = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='container'>
            <form className='mainform' action="" onSubmit={submitHandler}>
                <label htmlFor="fname">First name</label>
                <input type="text"
                    placeholder='Sanket'
                    name='fname'
                    value={formData.fname}
                    onChange={onchangeHandler} />



                <label htmlFor="lname">Last name</label>
                <input type="text"
                    placeholder='Nagare'
                    name='lname'
                    value={formData.lname}
                    onChange={onchangeHandler} />

                <label htmlFor="email">Email address</label>
                <input type="email"
                    placeholder='abc@gmail.com'
                    name='email'
                    value={formData.email}
                    onChange={onchangeHandler} />


                <label htmlFor="country">Country</label>
                <select name="country"
                    id="country"
                    onChange={onchangeHandler}
                    value={formData.country}
                >
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uae">UAE</option>
                </select>


                <label htmlFor="address">Street address</label>
                <input type="text"
                    placeholder='123 Main St'
                    name='address'
                    value={formData.address}
                    onChange={onchangeHandler} />

                <label htmlFor="city">City</label>
                <input type="text"
                    placeholder='Mumbai'
                    name='city'
                    value={formData.city}
                    onChange={onchangeHandler} />

                <label htmlFor="state">State/Province</label>
                <input type="text"
                    placeholder='MAharashtra'
                    name='state'
                    value={formData.state}
                    onChange={onchangeHandler} />

                <label htmlFor="code">ZIP/Postal code</label>
                <input type="number"
                    placeholder='422111'
                    name='code'
                    value={formData.code}
                    onChange={onchangeHandler} />


                <p>By Email</p>
                <div className="cbox">

                    <div className="c1">

                        <input type="checkbox"
                            name='comments'
                            id='comments'
                            onChange={onchangeHandler}
                            checked={formData.comments}
                        />
                        <label htmlFor="comments">Comments</label>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="c2">
                        <input type="checkbox"
                            name='candidate'
                            id='candidate'
                            onChange={onchangeHandler}
                            checked={formData.candidate}
                        />
                        <label htmlFor="candidate">Candidates</label>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="c3">
                        <input type="checkbox"
                            name='offers'
                            id='offers'
                            onChange={onchangeHandler}
                            checked={formData.offers}
                        />
                        <label htmlFor="offers">Offers</label>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>

                </div>

                <div className="rbuttons">
                    <h4>Push Notifications</h4>
                    <p>Lorem ipsum dolor sit amet.</p>

                    <div className="r1">
                        <input type="radio"
                            name="notify"
                            id="notify1"
                            onChange={onchangeHandler}
                            value="Everything"
                            checked={formData.notify === "Everything"}
                        />
                        <label htmlFor="notify1">Everything</label>
                    </div>


                    <div className="r2">
                        <input type="radio"
                            name="notify"
                            id="notify2"
                            onChange={onchangeHandler}
                            value="email"
                            checked={formData.notify === "email"}
                        />
                        <label htmlFor="notify2">Same as email</label>
                    </div>


                    <div className="r3">
                        <input type="radio"
                            name="notify"
                            id="notify3"
                            onChange={onchangeHandler}
                            value="no"
                            checked={formData.notify === "no"}
                        />
                        <label htmlFor="notify3">No push notification</label>

                    </div>


                </div>

                <input className='submitbtn' type="submit" />
            </form>
        </div>
    )
}

export default Form;