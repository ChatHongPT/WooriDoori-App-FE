const DefaultDiv = ({ children , isPadding = true}: { children: React.ReactNode, isPadding?: boolean}) =>{
    return (
        <div className={`border overflow-auto relative min-h-[100vh] h-[100vh] m-auto bg-white font-sans dark:bg-gray-700 w-full ${isPadding ? 'p-10' : ''}` }style={{maxWidth:'400px'}}>
            {children}
        </div>
    )
}

export default DefaultDiv;