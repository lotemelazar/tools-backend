let defaultWords = [
  "Absolute Advantage",
  "Advanced Trading Tools",
  "Algorithm",
  "All or None Order (AON)",
  "All-Time High (ATH)",
  "Alpha",
  "Altcoin",
  "Angel Investor",
  "Anti-Money Laundering (AML)",
  "Anti-Phishing Code",
  "Application Programming Interface (API)",
  "Application-Specific Integrated Circuit (ASIC)",
  "Arbitrage",
  "Arbitrage Trading",
  "ARC-20",
  "Artificial Intelligence (AI)",
  "ASIC-resistant",
  "Ask Price",
  "Asset Management",
  "Assets Under Management (AUM)",
  "Atomic Swap",
  "Attack Surface",
  "Auction",
  "Automated Market Maker (AMM)",
  "B-Tokens",
  "Bags",
  "Bakkt",
  "Beacon Chain",
  "Bear Market",
  "Benchmark",
  "BEP-20",
  "BEP-721",
  "BEP-95",
  "Beta (Coefficient)",
  "Beta (Release)",
  "Bid Price",
  "Bid-Ask Spread",
  "Bitcoin",
  "Bitcoin Core",
  "Bitcoin Dominance",
  "Bitcoin Maximalists",
  "Bitcoin Pizza",
  "Black Swan Event",
  "Block",
  "Block Confirmation",
  "Block Explorer",
  "Block Header",
  "Block Height",
  "Block Reward",
  "Blockchain",
  "Blockchain Charity Foundation",
  "Bloom Filter",
  "Blue-Chip Token",
  "BNB",
  "Bollinger Bands",
  "Bounty",
  "BRC-20 Tokens",
  "Break-Even Point (BEP)",
  "Breakeven Multiple",
  "Breakout",
  "BUIDL",
  "Bull Market",
  "Burner Wallet",
  "Burning",
  "Buy Wall",
  "Candlestick",
  "Candlestick Chart",
  "Capitulation",
  "Censorship-resistance",
  "Central Bank",
  "Central Bank Digital Currency (CBDC)",
  "Central Processing Unit (CPU)",
  "Centralized",
  "Centralized Exchange (CEX)",
  "ChatGPT",
  "Cipher",
  "Circulating Supply",
  "Cloud",
  "Coin",
  "Cold Storage",
  "Cold Wallet",
  "Collateral",
  "Colocation",
  "Commodity Futures Trading Commission (CFTC)",
  "Composite Index",
  "Compound Interest",
  "Confirmation Time",
  "Confluence",
  "Consensus Algorithm",
  "Constant Product Market Maker (CPMM)",
  "Consumer Price Index (CPI)",
  "Copy Trading",
  "Counterparty Risk",
  "Credentials",
  "Cross-Chain Bridges",
  "Cross-Chain Interoperability",
  "Crypto ETFs",
  "Crypto Fear and Greed Index",
  "Crypto Protocol",
  "Crypto Winter",
  "Cryptocurrency",
  "Cryptography",
  "Cryptojacking",
  "Custody",
  "DAO (Decentralized Autonomous Organization)",
  "DApp (Decentralized Application)",
  "Data Ownership Protocol (DOP)",
  "Dead Cat Bounce",
  "Decentralized Autonomous Cooperative (DAC)",
  "Decentralized Exchange (DEX)",
  "Decentralized Finance (DeFi)",
  "Decentralized Identity",
  "Decentralized Oracle",
  "Decryption",
  "Deflationary Token",
  "Derivatives",
  "Design Flaw Attack",
  "Deterministic Wallet",
  "Diamond Hands",
  "Difficulty",
  "Difficulty Bomb",
  "Digital Signature",
  "Distributed Ledger Technology (DLT)",
  "Divergence",
  "Diversification",
  "Do Your Own Research (DYOR)",
  "Dollar Cost Averaging (DCA)",
  "DOP Coin",
  "Double Spending",
  "Eclipse Attack",
  "Efficient Market Hypothesis (EMH)",
  "EigenLayer",
  "EIP-4844",
  "Elastic Supply Token",
  "Elasticity",
  "Elliptic Curve Cryptography (ECC)",
  "Encryption",
  "Enterprise Blockchain",
  "Enterprise Ethereum Alliance (EEA)",
  "ERC-1155",
  "ERC-20",
  "ERC-404",
  "ERC-721",
  "Escrow",
  "Ether (ETH)",
  "Ethereum",
  "Ethereum Classic",
  "Ethereum Foundation",
  "Ethereum Virtual Machine (EVM)",
  "Exchange",
  "Fair Launch",
  "Fakeout",
  "Falling Knife",
  "Fan Tokens",
  "Fear Of Missing Out (FOMO)",
  "Fear, Uncertainty and Doubt (FUD)",
  "Fiat",
  "Fiat On-Ramp",
  "Fill Or Kill Order (FOK)",
  "Finality",
  "First-Mover Advantage (FMA)",
  "Fiscal Policy",
  "Flash Loan",
  "Flashbots",
  "Flippening",
  "Forced Liquidation",
  "Forex (FX)",
  "Fork",
  "Formal Verification",
  "Fraud Proof",
  "Fren",
  "Front Running",
  "Full Node",
  "Fundamental Analysis (FA)",
  "Fungibility",
  "Futures Contract",
  "GameFi",
  "Gas",
  "Gas Fee",
  "Gas Limit",
  "Gated Content",
  "General Public License",
  "Genesis Block",
  "GitHub",
  "Golden Cross",
  "Golden Ratio",
  "Goldilocks",
  "Gossip Protocol",
  "Governance",
  "Governance Model",
  "Governance Token",
  "Gross Domestic Product (GDP)",
  "Gwei",
  "Hackathon",
  "Hacker",
  "Halving",
  "Hard Cap",
  "Hard Fork",
  "Hard Landing",
  "Hash",
  "Hash Collision",
  "Hash Function",
  "Hash Rate",
  "Hashed TimeLock Contract (HTLC)",
  "Herd Instinct",
  "High-Frequency Trading (HFT)",
  "HODL",
  "Honeypot",
  "Iceberg Order",
  "Immutability",
  "Index",
  "Index Funds",
  "Initial Coin Offering (ICO)",
  "Initial DEX Offering (IDO)",
  "Initial Exchange Offering (IEO)",
  "Initial Liquidity Offering (ILO)",
  "Initial Liquidity Pool (ILP)",
  "Initial Public Offering (IPO)",
  "Inscription",
  "Integrated Circuit (IC)",
  "Interoperability",
  "InterPlanetary File System (IPFS)",
  "IOU",
  "Isolated Margin",
  "Issuance",
  "J-Curve Effect",
  "Joint Venture (JV)",
  "JOMO (Joy of Missing Out)",
  "Junk Bonds",
  "Jurisdiction Risk",
  "Keccak",
  "Key Management System (KMS)",
  "Know Your Customer (KYC)",
  "Latency",
  "Law of Demand",
  "Layer 1 Blockchain",
  "Layer 2",
  "Ledger",
  "Leveraged Tokens",
  "Library",
  "Lightning Network",
  "Limit Order",
  "Liquid Staking",
  "Liquid Staking Token (LST)",
  "Liquidity",
  "Liquidity Crisis",
  "Liquidity Depth",
  "Liquidity Mining",
  "Liquidity Pool",
  "Liquidity Provider",
  "Liquidity Ratios",
  "Listing",
  "Maker",
  "Maker-Taker Model",
  "Malware",
  "Margin Call",
  "Margin Trading",
  "Market Capitalization",
  "Market Momentum",
  "Market Order",
  "Masternode",
  "Matching Engine",
  "Maximum Supply",
  "Mempool",
  "Merkle Root",
  "Merkle Tree",
  "Metadata",
  "MetaMask",
  "Metaverse",
  "Micro Transactions",
  "Mining",
  "Mining Farm",
  "Minting",
  "Monetary Policy",
  "Monitoring Tag",
  "Moon",
  "Mooning",
  "Moving Average Envelopes",
  "Moving Average Ribbon",
  "Mt. Gox",
  "Multisig Wallet",
  "Nakamoto Consensus",
  "NFT (Non-Fungible Token)",
  "NFT Floor Prices",
  "NFT Mystery Boxes",
  "NGMI",
  "Node",
  "Non-Custodial Wallet",
  "Nonce",
  "Off-Chain",
  "Off-Chain Governance",
  "Offline Signing Orchestrator (OSO)",
  "Offshore Account",
  "On-Chain",
  "On-Chain Analysis",
  "opBNB",
  "Open-Source Software (OSS)",
  "Opportunity Cost",
  "Oracle",
  "ORC-20 Tokens",
  "Order Book",
  "Order Book Depth",
  "Ordinals",
  "Orphan Block",
  "Over-the-Counter (OTC) Trading",
  "PancakeSwap",
  "Paper Wallet",
  "Parallelization",
  "Passive Management",
  "Peer-to-Peer (P2P)",
  "Pegged Currency",
  "Permissioned Blockchain",
  "Permissionless Blockchain",
  "Perpetual Swap",
  "Phishing",
  "Plasma",
  "Polkadot Crowdloan",
  "Ponzi Scheme",
  "Price Action",
  "Private Key",
  "Private Sale",
  "Progressive Web Application (PWA)",
  "Proof of Attendance Protocol (POAP)",
  "Proof of Burn",
  "Proof of History (PoH)",
  "Proof of Reserves (PoR)",
  "Proof of Space (PoSpace)",
  "Proof of Stake (PoS)",
  "Proof of Staked Authority (PoSA)",
  "Proof of Work (PoW)",
  "Proposer-Builder Separation (PBS)",
  "Proto-Danksharding",
  "Public Blockchain",
  "Public Key",
  "Pump-and-Dump",
  "Pump-and-Dump Scheme",
  "Quantitative Easing (QE)",
  "Quantum Computing",
  "Race Attack",
  "Ransomware",
  "Real World Assets (RWAs)",
  "Rebalancing",
  "Recession",
  "Recursive Inscription",
  "Regenerative Finance (ReFi)",
  "Regulatory Arbitrage",
  "Rekt",
  "Relative Strength Index (RSI)",
  "Replay Attack",
  "Resistance",
  "Return on Investment (ROI)",
  "Revenge Trading",
  "Risk Premium",
  "Roadmap",
  "Routing Attack",
  "Rug Pull",
  "Sandwich Trading",
  "Satoshi",
  "Satoshi Nakamoto",
  "SEC (Securities and Exchange Commission)",
  "Secure Asset Fund for Users (SAFU)",
  "Security Audit",
  "Security Token",
  "Security Token Offering (STO)",
  "Seed Phrase",
  "Seed Tag",
  "Segregated Witness (SegWit)",
  "Selfish Mining",
  "Sell Wall",
  "Sentiment",
  "Shard Chain",
  "Sharding",
  "Sharpe Ratio",
  "Sidechain",
  "Simple Moving Average (SMA)",
  "Slashing",
  "Slippage",
  "Slippage Tolerance",
  "Smart Contract",
  "Smart Contract Wallet",
  "Snapshot",
  "Social Recovery Wallet",
  "Social Trading",
  "SocialFi",
  "Soft Landing",
  "Solidity",
  "Source Code",
  "SPL",
  "SRC-20 Tokens",
  "Stablecoin",
  "Stagflation",
  "Staking Pool",
  "State Channel",
  "stETH",
  "Stock Variable",
  "Store of Value",
  "Supercomputer",
  "Supply Chain",
  "Support",
  "Sybil Attack",
  "Taker",
  "Tank",
  "Testnet",
  "Ticker",
  "Token",
  "Token Burn",
  "Token Generation Event (TGE)",
  "Token Lockup",
  "Token Sale",
  "Token Standards",
  "Tokenization",
  "Tokenomics",
  "Total Supply",
  "Total Value Locked (TVL)",
  "TradFi",
  "Transaction Fee",
  "Transaction ID (TXID)",
  "Transactions Per Second (TPS)",
  "Trustless",
  "Turing Complete",
  "Unit of Account",
  "Unspent Transaction Output (UTXO)",
  "User Interface (UI)",
  "Utility Token",
  "Validation",
  "Validator",
  "Verification Code",
  "Virtual Machine",
  "Vladimir Club",
  "Volatility",
  "Volume",
  "WAGMI",
  "Wallet",
  "Wash Trading",
  "Weak Hands",
  "Weak Subjectivity",
  "Web 1.0",
  "Wei",
  "Whale",
  "Whiskers",
  "Whitelist",
  "Wick",
  "Win Rate",
  "Wrapped Ether (WETH)",
  "Wyckoff",
  "X-Factor",
  "X-Order",
  "X-Pool",
  "X-Token",
  "Yield Curve",
  "Yield Farming",
  "Zero-Knowledge Proofs",
  "Zk-rollup",
  "zk-SNARKs",
  "zk-STARKs",
];

module.exports = defaultWords;
