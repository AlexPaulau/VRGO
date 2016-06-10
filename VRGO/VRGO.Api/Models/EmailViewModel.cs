using System.ComponentModel.DataAnnotations;

namespace VRGO.Api.Models
{
	public class EmailViewModel
	{
		[Required]
		public string Name
		{
			get;
			set;
		}

		[Required]
		public string PhoneNumber
		{
			get;
			set;
		}

		[Required]
		public string EmailAddress
		{
			get;
			set;
		}

		[Required]
		public string Message
		{
			get;
			set;
		}
	}
}