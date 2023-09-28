
import { useEffect, useLayoutEffect, useState } from "react";
import SailLogo from "../images/Layer 1.png";
import { Button, Col, Form, Input, Row } from "antd";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'
import google from '../images/Google svg.png'
import facebook from '../images/g10.png'
import line from '../images/Line 18.png'


const Signin = () => {


    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState();
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useLayoutEffect(() => {
        document.title = "Welcome | Sail Admin Portal"
        if (sessionStorage.getItem("user")) {
            window.location.href = "/dashboard"
        }
    })

    const [signInInfo, setsignInInfo] = useState({
        email: '',
        password: '',
    });

    //This state holds the error messages and allows the display of it when there issues with the form inputs
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignInInfo((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!signInInfo.email) {
            newErrors.email = 'Email is required';
        }
        if (!signInInfo.password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };



    const loginHandler = async () => {
        setLoading(true);
        try {
            if (validateForm()) {
                const { email, password } = signInInfo;
                console.log(email, password);
                const response = await axios.post(
                    process.env.REACT_APP_SSMP_BACKEND_API + "user/login", { email, password }
                )
                console.log(response.data);
                setMessage(response.data.responseMessage?.toUpperCase());
                if (response.data.responseCode === "00") {
                    const userRole = response.data.data.role;
                    if (userRole === "ADMIN") {
                        toast.success(response.data.responseMessage, {
                            duration: 4000,
                            position: "top-center",
                        });



                        // Check if the user is an admin
                        sessionStorage.setItem("token", response.data.data.token);
                        sessionStorage.setItem("role", response.data.data.role);
                        setMessage('Login successful');
                        console.log('before nav');
                        navigate('/dashboard');
                        console.log('after nav');
                    }
                } else {
                    // User's credentials are not valid
                    setMessage('Invalid credentials');
                    toast.error(response.data.responseMessage, {
                        duration: 4000,
                        position: "top-center",
                    });

                    setLoading(false);
                    console.log(response);
                }
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

        const fakelog=()=>{
            navigate("./dashboard")
        }


    return (
        <div className=" grid-cols-2  h-[100svh] text-[#100A42] inter mt-[4rem] flex gap-[3rem]">
            <div className="w-[10rem] xl:ml-[3rem] mt-[3rem] inline-flex justify-center ">
                <img src={SailLogo} alt="SailLogo" className=" w-[2.5rem] h-[2.5rem]" />
                <h1 className=" text-[#100A42] font-bold mt-2 xl:text-[1.2rem] lg:text-[1.2rem] md:text-[.8rem]">HelpMeOut</h1>
            </div>

            <div className="  justify-center m-auto my-[9rem] items-center text-[#141414] bg-white xl:w-[30rem] md:w-[25rem] border-[1px] border-white">
                <div >
                    <h1 className="text-center   text-2xl font-bold">Log in or Sign up</h1>
                    <p className=" text-[.7rem] w-[15rem] flex mx-auto justify-center">Join millions of others in sharing successful</p>
                    <p className=" text-[.7rem] w-[15rem] flex mx-auto justify-center">moves on HelpMeOut</p>
                </div>
                <div className="px-1 mt-3">
                    <button className=" rounded-md border-[1px] w-full  border-[#141414] flex gap-4">
                        <div className=" flex mx-auto gap-3">
                            <img src={google} alt="google" className=" w-[1.6rem] h-[1.6rem]" />
                            <p>Continue with Google</p></div>
                    </button>

                    <button className=" rounded-md border-[1px] w-full  mt-4 border-[#141414] flex gap-4">
                        <div className=" flex mx-auto gap-3 "> <img src={facebook} alt="google" className="ml-3 w-[1.6rem] h-[1.6rem]" />
                            <p>Continue with Facebook</p></div>
                    </button>
                </div>
                <div className="block justify-center items-center flex-col  h-80  ">
                    <div className="ml-[1.4rem]">

                    <div className=" mt-[4rem] text-[#B9C2C8] flex gap-2">
                        <img src={line} alt="line" className="  w-[10rem] h-[0.1rem] mt-[0.85rem]" />
                        <p className=" mb-10">or</p>
                        <img src={line} alt="line" className=" h-[0.1rem]  w-[10rem] mt-[0.85rem] " />
                        
                    </div>
                        <Form
                            layout="vertical"
                            className="  mr-4"
                            onFinish={fakelog}
                            fields={[
                                {
                                    name: "email",
                                    value: loginData?.email,
                                },
                                {
                                    name: "password",
                                    value: loginData?.password,
                                },
                            ]}
                        >
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                    label="Email Address"
                                    name="email"
                                    
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your EmailAddress!",
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={handleInputChange}
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email address"
                                            className="py-3"

                                        />
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                    label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input your password!",
                                            },
                                        ]}
                                    >
                                        <Input.Password
                                            onChange={handleInputChange}
                                            name="password"
                                            placeholder="Enter your Password"
                                            type="password"
                                            id="password"
                                            className="py-3 !hover:border-grey-400"
                                        />
                                    </Form.Item>
                              
                                    <Button
                                        loading={loading}
                                        type="danger"
                                        htmlType="submit"
                                        className="bg-[#120B48] hover:bg-[#2C25A2] text-white flex items-center justify-center py-5"
                                        block
                                    >
                                        Sign In
                                    </Button>
                                </Col>

                            </Row>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;

