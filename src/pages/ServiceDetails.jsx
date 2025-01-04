import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
    const [services, setServices] = useState({});

    useEffect(() => {
        if (services?.name) {
            document.title = `${services.name} | SmartRepair`;
        }
    }, [services]);

    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const { id } = useParams();


    useEffect(() => {
        fetchAllService()
    }, []);

    const fetchAllService = async () => {
        const { data } = await axios.get(`https://smart-repair-server-side.vercel.app/services/${id}`, {
            withCredentials: true
        })
        setServices(data)
    }

    // 
    const handlePurchase = async (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceTakingDate = form.serviceTakingDate.value;
        const specialInstruction = form.specialInstruction.value;

        const bookingData = {
            serviceId: services._id,
            serviceName: services.name,
            serviceImage: services.photo,
            providerEmail: services.serviceProvider?.serviceProvideremail,
            providerName: services.serviceProvider?.name,
            userEmail: user?.email,
            userName: user?.displayName,
            serviceTakingDate,
            specialInstruction,
            serviceStatus: "Pending",
            price: services.price,
        }

        fetch('https://smart-repair-server-side.vercel.app/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Purchase Successful',
                        text: 'Your purchase has been successfully completed!'
                    });
                    setShowModal(false);
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Already in Purchase',
                        text: 'Your purchase request has been submitted.'
                    });
                    setShowModal(false);
                }
            })

            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an issue checking your Booking.'
                });
            });

    }

    const { _id, photo, name, price, area, description, serviceProvider } = services;
    return (
        <div className='py-5 md:py-10 px-5 max-w-6xl mx-auto'>
             <ScrollRestoration></ScrollRestoration>
            <div className='mt-5 border-l-8 border-primary pl-4'>
                <h1 className='text-primary text-3xl font-bold'>Services Details</h1>
                <h3 className='text-2xl text-secondary font-semibold dark:text-white'>{name}</h3>
            </div>

            {
                serviceProvider && (

                    <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-lg flex mt-8 items-center gap-6">
                        <img
                            src={serviceProvider?.photo}
                            alt="Service Provider"
                            className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-blue-500 object-cover"
                        />
                        <div>
                            <h2 className="text-xl dark:text-white font-bold">{serviceProvider?.name}</h2>
                            <p className="text-gray-600 dark:text-white text-sm">
                                Location: {area}
                            </p>
                        </div>
                    </div>

                )
            }

            <div className=' mt-5 card gap-5  dark:bg-slate-700 bg-white p-5 rounded-lg'>
                <div className=''>
                    <img src={photo} className=' w-full h-64 md:h-[500px] object-cover rounded-lg' alt="" />
                </div>
                <div className='space-y-3 '>
                    <h1 className='text-2xl dark:text-white text-secondary font-bold'>{name}</h1>
                    <p className='text-lg font-medium dark:text-white text-info'>{description}.</p>
                    <div className='flex gap-10'>
                        <h2 className='text-secondary dark:text-white font-semibold text-xl '>Price: <span className='text-lg dark:text-white text-info'>{price}</span></h2>
                    </div>
                    
                    <div className='flex gap-5 items-center'>
                        {serviceProvider && (
                            <div className='flex gap-5 items-center'>
                                <img src={serviceProvider.photo} className='w-10 rounded-full' alt={serviceProvider.name} />
                                <h1 className='text-secondary dark:text-white font-bold text-xl'>{serviceProvider.name}</h1>
                            </div>
                        )}
                    </div>

                    <button onClick={() => setShowModal(true)} className='text-white mt-2 bg-primary px-3 py-2 rounded-md font-semibold'>Book now</button>
                </div>
            </div>



            {/* Purchase now modal */}
            {
                showModal && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <form onSubmit={handlePurchase}>
                                 {/* ServiceId*/}
                                 <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Service ID</span>
                                    </label>
                                    <input type="text" disabled={true} defaultValue={_id} className="input input-bordered" required />
                                </div>
                                {/* Service Name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Service Name</span>
                                    </label>
                                    <input type="text" disabled={true} defaultValue={name} className="input input-bordered" required />
                                </div>
                                {/* Service Image  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Service Image</span>
                                    </label>
                                    <input type="text" disabled={true} defaultValue={photo} className="input input-bordered" required />
                                </div>
                                {/* Provider email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Provider email</span>
                                    </label>
                                    <input type="email" disabled={true} defaultValue={serviceProvider?.serviceProvideremail} className="input input-bordered" required />
                                </div>
                                {/* Provider Name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Provider email</span>
                                    </label>
                                    <input type="email" disabled={true} defaultValue={serviceProvider?.name} className="input input-bordered" required />
                                </div>
                                {/* Current User email */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Current User email </span>
                                    </label>
                                    <input type="email" disabled={true} defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                                {/* Current User name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Current User Name </span>
                                    </label>
                                    <input type="text" disabled={true} defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>
                                {/* Service Taking Date */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Service Taking Date</span>
                                    </label>
                                    <input type="date" name="serviceTakingDate" className="input input-bordered" required />
                                </div>
                                {/* Special instruction */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg"> Special instruction</span>
                                    </label>
                                    <textarea required name="specialInstruction" className="textarea textarea-bordered resize-none" placeholder=" address , area"></textarea>
                                </div>
                                {/* Current User name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-secondary font-semibold text-lg">Current User Name </span>
                                    </label>
                                    <input type="text" disabled={true} defaultValue={price} className="input input-bordered" required />
                                </div>

                                <div className="modal-action w-full gap-4">
                                    <button type="submit" className="btn text-white text-lg bg-primary">Purchase</button>
                                    <button onClick={() => setShowModal(false)}
                                        className="btn-error btn rounded text-white text-lg">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div >
                )
            }
        </div>


    );
};

export default ServiceDetails;