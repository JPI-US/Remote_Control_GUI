/* useEffect(() => {
        const fetchSession = async () => {
            try {
                // Call backend endpoint that reads HttpOnly cookie
                const res = await fetch('/api/session', {
                    method: 'GET',
                    credentials: 'include', // send HttpOnly cookie
                });
                //console.log('Session response status:', res.status);

                if (!res.ok) {
                    router.push('/');// Invalid session, redirect to login
                    return;
                }

                const data = await res.json();

                if (!data?.id) {
                    console.log("Empty session data")
                    router.push('/'); // cookie missing or JWT invalid
                    return;
                }

                setUserId(data.id); 
                console.log('This is the userid response:', data.id);

                // Now fetch user-specific data using the userId
                const userResponse = await fetch(`/api/user/${data.id}`,{
                    method: 'GET',
                    credentials: 'include',
                });

                const userJson = await userResponse.json();
                setUser(userJson);
                //console.log('This is the userjson response:', userJson);

            } catch (err) {
                console.error('Failed to fetch user', err);
                router.push('/');
            } finally {
                setLoading(false);
            }
        };

        fetchSession();
    }, [router]); */




    <div className='block md:hidden flex mx-2 md:w-1/3 md:mx-auto relative'>
                {/* Phone Search Bar */}
                <Search className="absolute left-3 bottom-1 transform -translate-y-1/2 text-black" size={18} />
                <input
                    type="text"
                    placeholder="Tower Name"
                    className="w-full border-2 border-black text-black p-2 pl-10 bg-white rounded-lg focus:outline-none focus:ring-1"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className='block md:hidden mx-2 md:w-1/3 md:mx-auto'>
                {/* Phone search filtered results */}
                {query && (
                    <ul className="w-full bg-white dark:bg-green-400 border text-black rounded-lg shadow">
                        {displayedCards.length > 0 ? (
                            displayedCards.map((item, index) => (
                                <li 
                                    key={index} 
                                    className="p-2 border-b last:border-none">
                                    {item.name}
                                </li>
                            ))
                        ) : (
                        <li className="p-2 text-gray-500">No results found</li>
                        )}
                    </ul> 
                )}
            </div>

            <div className='flex md:pt-8 pt-4 md:-mt-20'>
                <div className='hidden rounded-md ml-10 w-1/5 relative'>
                    {/* Desktop Search Bar */}
                    <div className='pt-6 relative'>
                        <Search className="absolute left-3 bottom-1 transform -translate-y-1/2 text-black" size={18} />
                        <input
                            type="text"
                            placeholder="Tower Name"
                            className="w-full border-2 border-black text-black p-2 pl-10 bg-white rounded-lg focus:outline-none focus:ring-1"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div className=''>
                        {/* Desktop search filtered Results */}
                        {query && (
                            <ul className="w-full bg-white dark:bg-green-400 border text-black rounded-lg shadow max-h-30 overflow-y-auto">
                                {displayedCards.length > 0 ? (
                                    displayedCards.map((item, index) => (
                                        <li 
                                            key={index} 
                                            className="p-2 border-b last:border-none">
                                            {item.name}
                                        </li>
                                    ))
                                ) : (
                                <li className="p-2 text-gray-500">No results found</li>
                                )}
                            </ul> 
                        )}
                    </div>
                </div>
                <div className='w-full mx-auto md:mx-10'>
                    {/* Desktop Status Results border rounded-xl bg-white*/}
                    <div className='hidden md:block w-1/3 mx-auto'>
                        <div className='flex w-full'>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1/7 p-1 -mt-4'>{onlineCount}</p>
                                <Signal size={24} className="text-green-500 mx-auto mt-2" />
                                <p>Online</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1/7 p-1 -mt-4'>{warningCount}</p>
                                <TriangleAlert size={24} className="text-yellow-500 mx-auto mt-2"/>
                                <p>Warning</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1/7 p-1 -mt-4'>{faultCount}</p>
                                <ShieldAlert size={24} className="text-red-500 mx-auto mt-2"/>
                                <p>Fault</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1/7 p-1 -mt-4'>{offlineCount}</p>
                                <ShieldX size={24} className="text-grey-500 mx-auto mt-2"/>
                                <p>Offline</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1/7 p-1 -mt-4'>{powerData.length}</p>
                                <Sigma size={24} className="text-orange-300 mx-auto mt-2"/>
                                <p>Total</p>
                            </div>
                        </div>
                    </div>
                    {/* Phone Status Results border rounded-xl bg-white*/}
                    <div className='block md:hidden'>
                        <div className='flex w-full'>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1 p-1 -mt-4'>{onlineCount}</p>
                                <Signal size={24} className="text-green-500 mx-auto mt-2" />
                                <p>Online</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1 p-1 -mt-4'>{warningCount}</p>
                                <TriangleAlert size={24} className="text-yellow-500 mx-auto mt-2"/>
                                <p>Warning</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1 p-1 -mt-4'>{faultCount}</p>
                                <ShieldAlert size={24} className="text-red-500 mx-auto mt-2"/>
                                <p>Fault</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1 p-1 -mt-4'>{offlineCount}</p>
                                <ShieldX size={24} className="text-grey-500 mx-auto mt-2"/>
                                <p>Offline</p>
                            </div>
                            <div className='w-1/5 space-y-1 relative'>
                                <p className='absolute top-1/3 right-1 p-1 -mt-4'>{powerData.length}</p>
                                <Sigma size={24} className="text-orange-300 mx-auto mt-2"/>
                                <p>Total</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex border-2 block md:hidden bg-white mt-4 py-4 mx-2 rounded-md'>
            {/* Phone Filter */}
                <p className='text-xl font-bold ml-2 my-auto'>Filter:</p>
                <div className="relative border-1 rounded-md ml-6">
                    <button 
                        className="flex p-1 cursor-pointer hover:brightness-80"
                        onClick={() => setisStatusOpen(!isStatusOpen)}
                    >
                        Status
                        <img 
                            src="/images/right-arrow.png" 
                            alt="Submit" 
                            className={`ml-auto mt-1
                                ${isStatusOpen
                                    ? 'rotate-270'
                                    : 'rotate-90'
                                    }`} 
                            style={{height:'1em'}}
                        />
                    </button>
                    {isStatusOpen && (
                        <div className='absolute top-full left-0 z-50 bg-white shadow-md border mt-1'>
                            <div className="mx-auto flex pl-2">
                                <p className='pr-3'>Online</p>
                                <input 
                                    type="checkbox"
                                    id="status_online"
                                    className='ml-auto mr-3' 
                                    checked={activeStatuses.has('Tracking')}
                                    onChange={() => handleStatusChange('Tracking')}
                                />
                            </div>
                            <div className="mx-auto flex pl-2">
                                <p className='pr-3'>Warning</p>
                                <input 
                                    type="checkbox"
                                    id="status_warning"
                                    className='ml-auto mr-3' 
                                    checked={activeStatuses.has('Warning')}
                                    onChange={() => handleStatusChange('Warning')}
                                />
                            </div>
                            <div className="mx-auto flex pl-2">
                                <p className='pr-3'>Fault</p>
                                <input 
                                    type="checkbox"
                                    id="status_fault"
                                    className='ml-auto mr-3' 
                                    checked={activeStatuses.has('Fault')}
                                    onChange={() => handleStatusChange('Fault')}
                                />
                            </div>
                            <div className="mx-auto flex pl-2">
                                <p className='pr-3'>Offline</p>
                                <input 
                                    type="checkbox"
                                    id="status_offline"
                                    className='ml-auto mr-3' 
                                    checked={activeStatuses.has('Offline')}
                                    onChange={() => handleStatusChange('Offline')}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            <div className='flex pt-4'>   
                {/* Desktop Filter */}
                <div className='md:w-1/5'>
                    <div className='hidden md:block rounded-md ml-10 pb-6 -mt-6 relative'>
                        {/* Desktop Search Bar */}
                        <div className='pt-6 relative'>
                            <Search className="absolute left-3 bottom-1 transform -translate-y-1/2 text-black" size={18} />
                            <input
                                type="text"
                                placeholder="Tower Name"
                                className="w-full border-2 border-black text-black p-2 pl-10 bg-white rounded-lg focus:outline-none focus:ring-1"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div className=''>
                            {/* Desktop search filtered Results */}
                            {query && (
                                <ul className="w-full bg-white dark:bg-green-400 border text-black rounded-lg shadow max-h-30 overflow-y-auto">
                                    {displayedCards.length > 0 ? (
                                        displayedCards.map((item, index) => (
                                            <li 
                                                key={index} 
                                                className="p-2 border-b last:border-none">
                                                {item.name}
                                            </li>
                                        ))
                                    ) : (
                                    <li className="p-2 text-gray-500">No results found</li>
                                    )}
                                </ul> 
                            )}
                        </div>
                    </div>
                    <div className='hidden md:block border-2 border-black rounded-md bg-white ml-10 pb-8 h-60'>
                        <p className='text-xl font-bold py-4'>Filter</p>
                        <div className="border-1 rounded-md mx-10 py-2">
                            <button 
                                className="mx-auto w-2/3 flex p-1 cursor-pointer hover:brightness-80"
                                onClick={() => setisStatusOpen(!isStatusOpen)}
                            >
                                Status
                                <img 
                                    src="/images/right-arrow.png" 
                                    alt="Submit" 
                                    className={`ml-auto mt-1
                                        ${isStatusOpen
                                            ? 'rotate-270'
                                            : 'rotate-90'
                                        }`} 
                                    style={{height:'1em'}}
                                />
                            </button>
                            {isStatusOpen && (
                                <div>
                                    <div className="mx-auto w-2/3 flex pl-8">
                                        <p>Online</p>
                                        <input 
                                            type="checkbox"
                                            id="status_online"
                                            className='ml-auto mr-8' 
                                            checked={activeStatuses.has('Tracking')}
                                            onChange={() => handleStatusChange('Tracking')}
                                        />
                                    </div>
                                    <div className="mx-auto w-2/3 flex pl-8">
                                        <p>Warning</p>
                                        <input 
                                            type="checkbox"
                                            id="status_warning"
                                            className='ml-auto mr-8' 
                                            checked={activeStatuses.has('Warning')}
                                            onChange={() => handleStatusChange('Warning')}
                                        />
                                    </div>
                                    <div className="mx-auto w-2/3 flex pl-8">
                                        <p>Fault</p>
                                        <input 
                                            type="checkbox"
                                            id="status_fault"
                                            className='ml-auto mr-8' 
                                            checked={activeStatuses.has('Fault')}
                                            onChange={() => handleStatusChange('Fault')}
                                        />
                                    </div>
                                    <div className="mx-auto w-2/3 flex pl-8">
                                        <p>Offline</p>
                                        <input 
                                            type="checkbox"
                                            id="status_offline"
                                            className='ml-auto mr-8' 
                                            checked={activeStatuses.has('Offline')}
                                            onChange={() => handleStatusChange('Offline')}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                    
                {/* Cards Section */}
                <div className='w-full md:w-4/5 mx-2 md:mx-10 md:grid md:grid-cols-3 md:gap-4'> 
                {displayedCards.map((item, idx) => (
                    <Link href={`/dashboard/${item.id}`} key={idx}>
                        <div 
                            className='flex py-2 bg-white border-2 border-black shadow-md shadow-black rounded-lg my-4 md:my-0'
                            key={idx}
                            style={{
                                borderColor: item.status === 'Tracking' 
                                    ? 'limegreen' 
                                    : item.status === 'Warning' 
                                    ? 'orange' 
                                    : item.status === 'Offline' 
                                    ? 'Grey'
                                    : '#FF0800'
                            }}
                        >
                            <div className="w-2/5 ml-1 flex items-center justify-center">
                                <div className='relative'>                               
                                    <img
                                        src="images/Angle-Shower-2.svg"
                                        alt="Compass angle display"
                                        className="mx-auto mb-4"
                                        style={{
                                            height: '8em',
                                        }}
                                    />
                                    <motion.img
                                        src="images/Angle-Shower-1.svg"
                                        alt="compass angle pointer"
                                        className="absolute w-1/4 h-1/4 top-1/4 left-1/3"
                                        animate={{
                                            rotate: Number(item.angle) + 180,
                                        }}
                                    />
                                    <span className="mx-auto pb-1">{item.angle}°</span>
                                </div>
                            </div>
                            <div className='w-3/5'>
                                <p className='mx-auto pb-2 text-lg font-bold'>{item.name}</p>
                            <div className="space-y-1 md:space-y-0 md:mx-10 grid grid-cols-2 md:gap-4">
                                <div>
                                    <p>Power</p>
                                    <p className="text-[#FFB235]">{item.power} W</p>
                                </div>
                                <div>
                                    <p className=''>Status</p>
                                    <p
                                        className="text-black p-1 rounded-md mr-1 md:mr-0"
                                        style={{
                                            backgroundColor: item.status === 'Tracking' 
                                                ? 'limegreen' 
                                                : item.status === 'Warning' 
                                                ? 'orange' 
                                                : item.status === 'Offline' 
                                                ? 'Grey'
                                                : '#FF0800'
                                        }}
                                    >
                                        {item.status}
                                    </p>
                                </div>
                                <div>
                                    <p>Today</p>
                                    <p className="text-[#FFB235]">{item.today}kWh</p>
                                </div>
                                <div>
                                    <p>Total</p>
                                    <p className="text-[#FFB235]">{item.total}kWh</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            
            <div className='pt-24 w-full md:w-4/5 mx-2 md:mx-10 md:grid md:grid-cols-3 md:gap-4'>
                {Array.isArray(userTelemetry) && userTelemetry.map((telemetry, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <p><strong>ID:</strong> {telemetry.id}</p>
                    <p><strong>Length:</strong> {telemetry.length}</p>
                    <p><strong>Height:</strong> {telemetry.height}</p>
                    <p><strong>Width:</strong> {telemetry.width}</p>
                    <p><strong>Software Version:</strong> {telemetry.software_version}</p>
                    </div>
                ))}
            </div> 