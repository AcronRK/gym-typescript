import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam atque aperiam consequuntur rerum, cumque officia, ratione minima tenetur quaerat esse culpa sapiente, distinctio quidem minus? Totam quibusdam laborum earum dignissimos?</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5"> Lorem ipsum dolor </p>
                <p className="my-5"> amet consectetur adipisi </p>
                <p>  Totam atque aperiam </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> Lorem ipsfolor csad</p>
                <p className="my-5"> amet cond sect etur adipisi </p>
                <p>  Totam atque aperiam </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer