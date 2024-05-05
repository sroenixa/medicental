import { NextResponse } from "next/server";

export async function POST(req){
  let isSuccess;
    const data  =await req.json()
    require('dotenv').config()

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.sender,
          pass: process.env.password,
        }
      });
    
    const mailData = {
        from: process.env.sender,
        to: process.env.receiver,
        subject: `Mesaj İsteği: ${data.name} ${data.surname}`,
        html: `<div>${data.message}</div><p>Email: ${data.email}</p><p>İsim: ${data.name} ${data.surname}</p><p>Telefon: ${data.phone}</p><p>Konu: ${data.subject}</p><p>Mesaj: ${data.message}</p>`
    }


    try {
      await new Promise((resolve, reject) => {
          transporter.sendMail(mailData, function (err, info) {
              if (err) {
                  isSuccess = false;
                  reject(err); // Reject the promise if there's an error
              } else {
                  isSuccess = true;
                  resolve(); // Resolve the promise if the email is sent successfully
              }
          });
      });

      return NextResponse.json({success:isSuccess})
  } catch (error) {
         return NextResponse.json({success:false})
  }


}