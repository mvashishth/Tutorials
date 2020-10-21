import React, {Component} from 'react';


function Page(props) {
	console.log(props.name);
  return (
    <div>
    Hello {props.name}
    </div>
  );
}

export default Page;
