import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: `Portfolio Contact <alok@alokkiran.com>`, // Replace with your verified domain
      to: ['alokkiran777@gmail.com'], // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 20px;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
            }
            
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
              padding: 40px 30px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            
            .header::before {
              content: '';
              position: absolute;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
              background-size: 20px 20px;
              animation: float 20s linear infinite;
            }
            
            @keyframes float {
              0% { transform: rotate(0deg) translate(-50%, -50%); }
              100% { transform: rotate(360deg) translate(-50%, -50%); }
            }
            
            .profile-container {
              position: relative;
              z-index: 2;
              margin-bottom: 20px;
            }
            
            .profile-image {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              border: 4px solid rgba(255, 255, 255, 0.3);
              object-fit: cover;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .header h1 {
              color: white;
              font-size: 28px;
              font-weight: 700;
              margin: 0;
              position: relative;
              z-index: 2;
              text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
            
            .header p {
              color: rgba(255, 255, 255, 0.9);
              font-size: 16px;
              margin: 10px 0 0 0;
              position: relative;
              z-index: 2;
            }
            
            .content {
              padding: 40px 30px;
            }
            
            .badge {
              display: inline-block;
              background: linear-gradient(45deg, #a855f7, #ec4899);
              color: white;
              padding: 8px 16px;
              border-radius: 25px;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 25px;
            }
            
            .contact-info {
              background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
              border-radius: 16px;
              padding: 25px;
              margin: 25px 0;
              border-left: 5px solid #a855f7;
              position: relative;
              overflow: hidden;
            }
            
            .contact-info::before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              width: 100px;
              height: 100px;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1));
              border-radius: 50%;
              transform: translate(30px, -30px);
            }
            
            .info-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 15px;
              position: relative;
              z-index: 1;
            }
            
            .info-item {
              background: white;
              padding: 15px;
              border-radius: 12px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
              transition: transform 0.2s ease;
            }
            
            .info-item:hover {
              transform: translateY(-2px);
            }
            
            .info-label {
              font-size: 12px;
              color: #6b7280;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            
            .info-value {
              font-size: 16px;
              color: #1f2937;
              font-weight: 500;
            }
            
            .message-section {
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
              color: white;
              border-radius: 16px;
              padding: 30px;
              margin: 25px 0;
              position: relative;
              overflow: hidden;
            }
            
            .message-section::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
              opacity: 0.5;
            }
            
            .message-section h3 {
              font-size: 20px;
              margin-bottom: 15px;
              color: #f9fafb;
              position: relative;
              z-index: 1;
            }
            
            .message-content {
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 20px;
              font-size: 15px;
              line-height: 1.7;
              color: #e5e7eb;
              position: relative;
              z-index: 1;
            }
            
            .footer {
              background: #f8fafc;
              padding: 30px;
              text-align: center;
              border-top: 1px solid #e5e7eb;
            }
            
            .footer-content {
              color: #6b7280;
              font-size: 14px;
              margin-bottom: 15px;
            }
            
            .social-links {
              display: flex;
              justify-content: center;
              gap: 15px;
              margin-top: 20px;
            }
            
            .social-link {
              display: inline-block;
              width: 40px;
              height: 40px;
              background: linear-gradient(45deg, #a855f7, #ec4899);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              text-decoration: none;
              font-weight: 600;
              transition: transform 0.2s ease;
            }
            
            .social-link:hover {
              transform: scale(1.1);
            }
            
            .timestamp {
              font-size: 11px;
              color: #9ca3af;
              text-align: center;
              margin-top: 15px;
              font-style: italic;
            }
            
            @media (max-width: 600px) {
              body {
                padding: 10px;
              }
              
              .header, .content, .footer {
                padding: 25px 20px;
              }
              
              .header h1 {
                font-size: 24px;
              }
              
              .info-grid {
                grid-template-columns: 1fr;
              }
              
              .social-links {
                flex-wrap: wrap;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <!-- Header with profile -->
            <div class="header">
              <div class="profile-container">
                <img src="https://alokkiran.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falok.81c15962.png&w=828&h=828&q=75" alt="Alok Kiran" class="profile-image" />
              </div>
              <h1>New Contact Message!</h1>
              <p>Someone reached out through your portfolio</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="badge">Portfolio Contact Form</div>

              <!-- Contact Information -->
              <div class="contact-info">
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Full Name</div>
                    <div class="info-value">${name}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email Address</div>
                    <div class="info-value">${email}</div>
                  </div>
                </div>
              </div>

              <!-- Message Section -->
              <div class="message-section">
                <h3>💬 Their Message</h3>
                <div class="message-content">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <!-- Quick Actions -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}?subject=Re: Your message to Alok Kiran" 
                   style="display: inline-block; background: linear-gradient(45deg, #a855f7, #ec4899); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: 600; margin: 0 10px; transition: transform 0.2s ease;">
                  📧 Reply via Email
                </a>
                <a href="https://www.linkedin.com/in/alokkiran/" 
                   style="display: inline-block; background: linear-gradient(45deg, #0077b5, #00a0dc); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: 600; margin: 0 10px; transition: transform 0.2s ease;">
                  💼 LinkedIn Profile
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div class="footer-content">
                This email was automatically generated from your portfolio contact form.<br>
                <strong>alokkiran.com</strong> • Full-Stack Developer • Dubai, UAE 🇦🇪
              </div>
              
              <div class="social-links">
                <a href="https://github.com/alok-kiran" class="social-link">GH</a>
                <a href="https://www.linkedin.com/in/alokkiran/" class="social-link">LI</a>
                <a href="mailto:alokkiran777@gmail.com" class="social-link">@</a>
              </div>
              
              <div class="timestamp">
                Received on ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Asia/Dubai'
                })} (Dubai Time)
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    });

    console.log(data);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}