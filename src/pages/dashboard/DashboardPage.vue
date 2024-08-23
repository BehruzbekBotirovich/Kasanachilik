<template>


    <div class="flex  ">
        <!-- menu -->
        <div class="menu-container">

            <router-link to="/">
                <div class="flex gap-2 items-center mb-4 text-white ml-4">
                    <img src="@/assets/logo.svg" alt="Logo" class="h-8">
                    <div>
                        <h1 class="font-bold">Kasanachilar</h1>
                        <h3>maktabi</h3>
                    </div>
                </div>
            </router-link>

            <a-menu mode="inline" theme="dark" :selectedKeys="selectedKeys" @click="handleClick" class="menu">
                <router-link to="/">
                    <a-menu-item key="1">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 17.3464H16M11.0177 3.11043L4.23539 8.38556C3.78202 8.73818 3.55534 8.91449 3.39203 9.13529C3.24737 9.33088 3.1396 9.55122 3.07403 9.78549C3 10.05 3 10.3371 3 10.9115V18.1464C3 19.2665 3 19.8266 3.21799 20.2544C3.40973 20.6307 3.71569 20.9367 4.09202 21.1284C4.51984 21.3464 5.07989 21.3464 6.2 21.3464H17.8C18.9201 21.3464 19.4802 21.3464 19.908 21.1284C20.2843 20.9367 20.5903 20.6307 20.782 20.2544C21 19.8266 21 19.2665 21 18.1464V10.9115C21 10.3371 21 10.05 20.926 9.78549C20.8604 9.55122 20.7526 9.33088 20.608 9.13529C20.4447 8.91449 20.218 8.73818 19.7646 8.38556L12.9823 3.11043C12.631 2.83718 12.4553 2.70056 12.2613 2.64804C12.0902 2.6017 11.9098 2.6017 11.7387 2.64804C11.5447 2.70056 11.369 2.83718 11.0177 3.11043Z"
                                stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Asosiy</span>
                    </a-menu-item> </router-link>
                <div class="spacer"></div>
                <router-link to="/faqs">
                    <a-menu-item key="2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                                stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Yordam</span>
                    </a-menu-item>
                </router-link>
                <a-menu-item key="3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
                            stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Sozlamalar</span>
                </a-menu-item>

            </a-menu>

            <div class="pt-6 border-t border-gray-500 mt-6 border-white px-1 flex items-center ">
                <div>
                    <img class="h-10 w-10 object-cover rounded-full "
                        src="data:image/jpeg;base64,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"
                        alt="">
                </div>
                <div class="text-white pl-3">
                    <h1 class="font-semibold">A.A.Azamatov</h1>
                    <p>Kengash raisi</p>
                </div>
                <div class="ml-auto">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                            stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>


        </div>


        <!-- content -->
        <div class="p-6 bg-gray-100 w-full h-screen overflow-y-scroll overflow-y-hidden">
            <!-- title -->
            <div>
                <h1 class="text-3xl font-semibold mb-2">Xush kelibsiz</h1>
                <p class="text-gray-700">Kasanachilik maktabi tizimiga</p>
                <ul class="flex items-center border-2 rounded-lg my-2 w-fit">
                    <li class="py-2 px-3 font-semibold border-r-2 "> 12 oy</li>
                    <li class="py-2 px-3 font-semibold border-r-2 "> 30 kun </li>
                    <li class="py-2 px-3 font-semibold border-r-2 "> 7 kun</li>
                    <li class="py-2 px-3 font-semibold "> 24 soat</li>
                </ul>
            </div>


            <div class="lg:block xl:flex gap-4 w-full">
                <!-- stat 1 -->
                <div class="lg:flex lg:w-full xl:block  xl:w-1/2 ">
                    <!-- stat1 small s -->
                    <div class="lg:block lg:w-1/3  xl:flex xl:w-full gap-4 mr-4">

                        <div class="lg:w-full  xl:w-1/2  p-4 mb-4 bg-white rounded-xl relative ">
                            <div class=" rounded-full overflow-hidden w-fit p-2 bg-yellow-300 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
                                        stroke="#F79009" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 class="text-sm text-gray-500 semibold">Kasanachilik maktabi a’zolari soni </h1>
                            <div class="mt-2 flex justify-between items-center">
                                <CountUp :target="23983" :duration="2" :step="128"></CountUp>
                                <div
                                    class="px-2 bg-green-100 text-green-800 flex items-center border-green-600 border rounded-full">
                                    <ArrowUpOutlined style="color:#17B26A ; font-size: 12px;"></ArrowUpOutlined>
                                    14%
                                </div>
                            </div>
                            <button
                                class="absolute top-3 right-3  w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <MoreOutlined />
                            </button>
                        </div>

                        <div class="lg:w-full  xl:w-1/2  p-4 mb-4 bg-white rounded-xl relative ">
                            <div class=" rounded-full overflow-hidden w-fit p-2 bg-yellow-300 mb-4 ">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8M16.2 3C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8M16.2 3H15.2C14.0799 3 13.5198 3 13.092 3.21799C12.7157 3.40973 12.4097 3.71569 12.218 4.09202C12 4.51984 12 5.07989 12 6.2V8.8C12 9.9201 12 10.4802 12.218 10.908C12.4097 11.2843 12.7157 11.5903 13.092 11.782C13.5198 12 14.0799 12 15.2 12H17.8C18.9201 12 19.4802 12 19.908 11.782C20.2843 11.5903 20.5903 11.2843 20.782 10.908C21 10.4802 21 9.92011 21 8.8V7.8M12.5 11.5L7 17M7 17H12M7 17L7 12"
                                        stroke="#F79009" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h1 class="text-sm text-gray-500 semibold">Kasanachilik yo’nalishlari</h1>
                            <div class="mt-2  flex justify-between items-center">
                                <CountUp :target="35" :duration="2"></CountUp>
                                <div
                                    class="px-2 bg-green-100 text-green-800 flex items-center border-green-600 border rounded-full">
                                    <ArrowUpOutlined style="color:#17B26A ; font-size: 12px;"></ArrowUpOutlined>
                                    14%
                                </div>
                            </div>
                            <button
                                class="absolute top-3 right-3  w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <MoreOutlined />
                            </button>
                        </div>
                    </div>
                    <!-- stat1 large -->
                    <div class=" lg:w-2/3 xl:w-full bg-white rounded-lg p-6 ">
                        <div class="flex justify-between items-center mb-4">
                            <h1 class="py-4 text-xl font-bold ">Murojaylar bo'yicha statistika</h1>
                            <button
                                class="rounded-lg h-fit py-2 px-4 flex justify-center items-center gap-2 font-semibold text-gray-500 border ">
                                <CalendarOutlined />Vaqtni tanlang
                            </button>
                        </div>
                        <div>

                            <DonatStat></DonatStat>
                        </div>
                    </div>
                </div>

                <!-- stat 2 -->
                <div class="lg:flex lg:w-full xl:block  xl:w-1/2 ">
                    <!-- stat2 small s -->
                    <div class="lg:block lg:w-1/3  xl:flex xl:w-full gap-4 mr-4">
                        <div class="lg:w-full  xl:w-1/2  p-4 mb-4 bg-white rounded-xl relative ">
                            <div class=" rounded-full overflow-hidden w-fit p-2 bg-yellow-300 mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.5 7.27771L12 11.9999M12 11.9999L3.49997 7.27771M12 11.9999L12 21.5M21 16.0585V7.94141C21 7.59876 21 7.42744 20.9495 7.27464C20.9049 7.13947 20.8318 7.01539 20.7354 6.9107C20.6263 6.79236 20.4766 6.70916 20.177 6.54276L12.777 2.43164C12.4934 2.27409 12.3516 2.19531 12.2015 2.16442C12.0685 2.13709 11.9315 2.13709 11.7986 2.16442C11.6484 2.19531 11.5066 2.27409 11.223 2.43165L3.82297 6.54276C3.52345 6.70916 3.37369 6.79236 3.26463 6.9107C3.16816 7.01539 3.09515 7.13947 3.05048 7.27465C3 7.42745 3 7.59877 3 7.94141V16.0585C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9845 3.26463 17.0892C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7258 11.6484 21.8046 11.7986 21.8355C11.9315 21.8628 12.0685 21.8628 12.2015 21.8355C12.3516 21.8046 12.4934 21.7258 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0892C20.8318 16.9845 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0585Z"
                                        stroke="#F79009" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M16.5 9.5L7.5 4.5" stroke="#F79009" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h1 class="text-sm text-gray-500 semibold">Kasanachilik mahsulotlari soni</h1>
                            <div class="mt-2  flex justify-between items-center">
                                <CountUp :target="47568" :duration="2" :step="312"></CountUp>
                                <div
                                    class="px-2 bg-green-100 text-green-800 flex items-center border-green-600 border rounded-full">
                                    <ArrowUpOutlined style="color:#17B26A ; font-size: 12px;"></ArrowUpOutlined>
                                    14%
                                </div>
                            </div>
                            <button
                                class="absolute top-3 right-3  w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <MoreOutlined />
                            </button>
                        </div>

                        <div class="lg:w-full  xl:w-1/2  p-4 mb-4 bg-white rounded-xl relative  ">
                            <div class=" rounded-full overflow-hidden w-fit p-2 bg-yellow-300 mb-4 ">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.46445 8.46448L4.92893 4.92896M4.92893 19.0711L8.46448 15.5355M15.5355 15.5355L19.0711 19.071M19.0711 4.92891L15.5355 8.46445M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
                                        stroke="#F79009" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h1 class="text-sm text-gray-500 semibold">Kasanachilik uchun imtiyozlar soni </h1>
                            <div class="mt-2  flex justify-between items-center">
                                <CountUp :target="45" :duration="1000"></CountUp>
                                <div
                                    class="px-2 bg-green-100 text-green-800 flex items-center border-green-600 border rounded-full">
                                    <ArrowUpOutlined style="color:#17B26A ; font-size: 12px;"></ArrowUpOutlined>
                                    14%
                                </div>
                            </div>
                            <button
                                class="absolute top-3 right-3  w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
                                <MoreOutlined />
                            </button>
                        </div>
                    </div>
                    <!-- stat2 large -->
                    <div class="lg:w-2/3 xl:w-full bg-white rounded-lg p-6 ">
                        <LineStat></LineStat>
                    </div>
                </div>

            </div>
            <div>

            </div>



        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive, h } from 'vue';
import { ArrowUpOutlined, ArrowDownOutlined, MoreOutlined, CalendarOutlined } from '@ant-design/icons-vue';

import CountUp from './components/CountUp.vue'
import DonatStat from './components/DonatStat.vue'

import LineStat from './components/LineStat.vue'









</script>

<style scoped>
:deep(.ant-menu-title-content) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

:deep(.ant-menu-item) {
    padding-left: 12px !important;
}

.menu-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    height: 100vh;
    background: #001529;
    padding: 2rem 1rem;
}

:deep(.ant-menu-item-selected) {
    background: #ffffff24;
}

.menu {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.spacer {
    flex-grow: 1;
}
</style>