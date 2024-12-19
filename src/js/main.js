(function ($) {
	"use strict";
  
	// Dropdown menu functionality
	$('nav .dropdown').hover(
	  function () {
		var $this = $(this);
		$this.addClass("show");
		$this.find("> a").attr("aria-expanded", true);
		$this.find(".dropdown-menu").addClass("show");
	  },
	  function () {
		var $this = $(this);
		$this.removeClass("show");
		$this.find("> a").attr("aria-expanded", false);
		$this.find(".dropdown-menu").removeClass("show");
	  }
	);
  
	// Connect Wallet Button Functionality
	async function connectWallet() {
	  const connectButton = document.getElementById("connectWallet");
	  const walletAddressDisplay = document.getElementById("walletAddress");
  
	  if (typeof window.ethereum !== "undefined") {
		try {
		  // Request account access
		  const accounts = await window.ethereum.request({
			method: "eth_requestAccounts",
		  });
		  const walletAddress = accounts[0];
  
		  // Display connected wallet address
		  walletAddressDisplay.innerText = `Connected: ${walletAddress}`;
		  console.log("Wallet connected:", walletAddress);
  
		  // Disable the button after connection
		  connectButton.disabled = true;
		  connectButton.innerText = "Wallet Connected";
		} catch (error) {
		  console.error("Error connecting wallet:", error);
		}
	  } else {
		alert("MetaMask is not installed. Please install it to use this feature.");
	  }
	}
  
	// Add event listener to the button
	document
	  .getElementById("connectWallet")
	  .addEventListener("click", connectWallet);
  })(jQuery);
  