using System;
using System.Net;
using System.Net.Mail;
using System.Web.Http;
using VRGO.Api.Models;
using VRGO.Api.Properties;

namespace VRGO.Api.Controllers
{
    public class EmailController : ApiController
    {
	    private const string SmtpServer = "smtp.gmail.com";
	    private const int SmtpPort = 587;
	    private const string SmtpLogin = "vrgoby@gmail.com";
	    private const string SmtpPassword = "qwasZX12";

        public IHttpActionResult Post(EmailViewModel viewModel)
        {
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			try
	        {
				SendEmail(viewModel);
		        return Ok();
	        }
	        catch (Exception e)
	        {
		        return InternalServerError();
	        }
        }

	    private void SendEmail(EmailViewModel viewModel)
	    {
		    var client = new SmtpClient
		    {
			    Host = SmtpServer,
			    EnableSsl = true,
			    Port = SmtpPort,
			    DeliveryMethod = SmtpDeliveryMethod.Network,
			    UseDefaultCredentials = false
		    };
		    client.Credentials = new NetworkCredential(SmtpLogin, SmtpPassword);

			var mailMessage = new MailMessage(new MailAddress(viewModel.EmailAddress, viewModel.Name), new MailAddress(SmtpLogin, "Info"))
		    {
			    Subject = Resources.EmailSubject,
			    Body = $"{viewModel.Message}{Environment.NewLine}Номер телефона: {viewModel.PhoneNumber}{Environment.NewLine}Email адрес: {viewModel.EmailAddress}"
		    };

		    client.Send(mailMessage);
		}
    }
}
