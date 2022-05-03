import PropTypes from 'prop-types';
import React from "react";
import images from "../images/cats.jpg"

function Navbar(props){
    
    // const text=34;
    return(
        <div className="container mx-auto">
            <div className="text-5xl mt-20 text-yellow-500 underline">
                <h1><a href='/Contact'>{props.title}</a></h1>
            </div>
            <div className="XS">
                {props.fiyat}   
            
            </div>
            <hr />
            <div>
                <ul>
                    <li>İsim-Soyisim : {props.title} </li>
                
                    <li>Maaş : {props.salary} </li>
                    <li>Adres : {props.adress}</li>
                </ul>

                
            </div>
            
            <img className='float-left  pr-4' src={images} height={180} width={180} alt="profil" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum vel autem ipsam? Dolorum veniam error quidem reiciendis quia vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga qui, recusandae molestias laudantium porro, architecto adipisci quas vel aliquid excepturi. Reiciendis fugit distinctio nemo optio culpa aperiam blanditiis quis omnis, ad eos architecto mollitia officia. Voluptas suscipit reiciendis, magnam sapiente minus tenetur numquam nulla deserunt fuga, tempore at? Dignissimos, in libero dolores blanditiis reprehenderit nisi minus culpa, quod delectus iste id adipisci earum accusamus quas dolorum recusandae? Tempora hic soluta cumque accusamus excepturi perferendis illo similique aliquid dolorum. Provident suscipit iusto ex consequuntur dolore labore quibusdam quos pariatur aspernatur minima amet explicabo, adipisci est, odit culpa beatae sit perferendis expedita? Quaerat officia at reiciendis minima dolorum ab iste delectus? Suscipit ratione, facilis nobis eos labore doloremque quae aperiam repellat rem. Ullam provident totam, ex exercitationem aut, pariatur eos atque enim commodi odit debitis asperiores rerum temporibus dolorum sit delectus? Itaque omnis temporibus error quod voluptates doloremque optio, voluptatem exercitationem quidem accusantium. Pariatur facilis harum amet non dolore placeat excepturi voluptate minus eaque vel ad beatae sunt alias quod sequi quis corporis, magni consequatur laborum ipsa dolorem enim quia! Nesciunt iusto consequuntur sunt culpa impedit minima libero rerum maiores numquam hic optio accusantium dicta laboriosam molestiae ea nisi, quibusdam praesentium corporis quasi. Aliquam, perspiciatis possimus aspernatur nulla odio autem, quasi culpa fugit esse nam voluptatum, adipisci iusto iure reprehenderit officiis repellat. Pariatur ut, voluptatem iusto obcaecati accusantium voluptas nobis ipsam odit asperiores corrupti magnam sed possimus voluptatibus libero hic doloribus, maiores atque! Aperiam tempore soluta ea odio eum ipsum rem.</p>
            

          
        <div className='flex justify-center'>
<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4 ">
    <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
        Entreprise
    </p>
    <p class="text-gray-900 dark:text-white text-3xl font-bold">
        $0
        <span class="text-gray-300 text-sm">
            / month
        </span>
    </p>
    <p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
        For most businesses that want to optimize web queries.
    </p>
    <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own custom Tailwind styles
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Unlimited Templates
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Free premium dashboard
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Best ranking
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Prenium svg
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            My wife
        </li>
    </ul>
    <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Choose plan
    </button>
</div>
<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4 ">
    <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
        Entreprise
    </p>
    <p class="text-gray-900 dark:text-white text-3xl font-bold">
        $0
        <span class="text-gray-300 text-sm">
            / month
        </span>
    </p>
    <p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
        For most businesses that want to optimize web queries.
    </p>
    <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own custom Tailwind styles
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Unlimited Templates
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Free premium dashboard
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Best ranking
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Prenium svg
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            My wife
        </li>
    </ul>
    <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Choose plan
    </button>
</div>
<div class="shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4 ">
    <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
        Entreprise
    </p>
    <p class="text-gray-900 dark:text-white text-3xl font-bold">
        $0
        <span class="text-gray-300 text-sm">
            / month
        </span>
    </p>
    <p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
        For most businesses that want to optimize web queries.
    </p>
    <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            All illimited components
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Own custom Tailwind styles
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Unlimited Templates
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Free premium dashboard
        </li>
        <li class="mb-3 flex items-center ">
            <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Best ranking
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            Prenium svg
        </li>
        <li class="mb-3 flex items-center opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" class="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                </path>
            </svg>
            My wife
        </li>
    </ul>
    <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Choose plan
    </button>
</div>
</div>





        </div>
        
    );
    
        
}


Navbar.propTypes = {
     title: PropTypes.string.isRequired
 }

export default Navbar;