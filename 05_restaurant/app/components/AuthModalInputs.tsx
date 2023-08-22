interface Props {
  inputs: {
    firstName: "";
    lastName: "";
    email: "";
    phone: "";
    city: "";
    password: "";
  };
  handleChangeInput: (e:React.ChangeEvent<HTMLInputElement>)=>void;
  isSignin:boolean;
}

export default function AuthModalInputs({ inputs,handleChangeInput,isSignin }: Props) {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        {isSignin? null : (
          <>
            <input
              type="text"
              name='firstName'
              value={inputs.firstName}
              onChange={handleChangeInput}
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="First Name"
              />
            <input
              type="text"
              name='lastName'
              value={inputs.lastName}
              onChange={handleChangeInput}
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Last Name"
            />
          </>
        )}
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input 
          type="text"
          name='email'
          value={inputs.email}
          onChange={handleChangeInput}
          className="border rounded p-2 py-3 w-full" 
          placeholder="Email" 
        />
      </div>
      {isSignin? null :(
        <>
          <div className="my-3 flex justify-between text-sm">
            <input
              type="text"
              name='phone'
              value={inputs.phone}
              onChange={handleChangeInput}
              className="border rounded p-2 py-3 w-[49%]"
              placeholder="Phone"
              />
            <input 
              type="text"
              name='city'
              value={inputs.city}
              onChange={handleChangeInput}
              className="border rounded p-2 py-3 w-[49%]" 
              placeholder="City" />
          </div>
        </>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          name='password'
          value={inputs.password}
          onChange={handleChangeInput}
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
        />
      </div>
    </div>
  );
}
