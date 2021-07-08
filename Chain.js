const SHA256 =  require('crypto-js/sha256');

const genesisBlock = {
       id:0,
       timestamp:"04/07/2021",
       data:"none",
       previousHash:0,
       hash:0,
}

const chain = [genesisBlock]

//functin to get and return last block in chain
function lastBlock(){
       return chain[chain.length - 1]
}

//function to add block
function addBlock(nid,ts,ndata){
       let newBlock =  {
              id:nid,
              timestamp:ts,
              data:ndata,
              previousHash:lastBlock().hash,
              hash:SHA256(nid + lastBlock().previousHash + ts + JSON.stringify(ndata)).toString(),
       }

       chain.push(newBlock)
}

addBlock(1, "05/07/2021", { amount:4 })
addBlock(2, "06/07/2021", { amount:5 })
console.log(JSON.stringify(chain,null,4))
