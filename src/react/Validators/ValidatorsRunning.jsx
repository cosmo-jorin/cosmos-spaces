import React from "react";


class ValidatorsRunning extends React.Component {

  render() {
    return (
      <div className='validators-running'>
        <div className="validators-running-1">
          <a href="https://wallet.keplr.app/#/cosmoshub/stake?modal=stake&validator=cosmosvaloper13p5ckpmc9g2v8ez5qsxs00wadqvcc7q0qheh26" target="_blank" ><img src='/static/img/tokens/cosmos.svg' /></a>
          <a href="https://wallet.keplr.app/#/osmosis/stake?modal=stake&chainId=osmosis-1&validator=osmovaloper1t48236ajss9wswamwll4nj7up2gqdns52gvyaa" target="_blank" ><img src='/static/img/tokens/osmosis.svg' /></a>
          <a href="https://wallet.keplr.app/#/emoney/stake?tab=active-validators&modal=stake&validator=emoneyvaloper1gzyn2r8atqwntugn93jxlmn2hhmepglkztc237" target="_blank" ><img src='/static/img/tokens/emoney.svg' /></a>
          <a href="https://wallet.keplr.app/#/evmos/stake?modal=stake&validator=evmosvaloper17z0xyw6vwjn6gqj86s3axs7mjsngdl6sncdwga" target="_blank" ><img id="evmos" src='/static/img/tokens/evmos.svg' /></a>
        </div>
        <div className="validators-running-2">
          <a href="https://ping.pub/comdex/staking/comdexvaloper1ee63nuagkj5age25jhdytj6vawt89jqqxyw7ls" target="_blank" ><img src='/static/img/tokens/comdex.svg' /></a>
          <a href="https://ping.pub/dig/staking/digvaloper155yeaaum5la2p3mkhrn9nwtx7kyvn39xwlm94u" target="_blank" ><img src='/static/img/tokens/dig.png' /></a>
          <a href="https://www.google.es" target="_blank" ><img src='/static/img/tokens/omniflix.svg' /></a>
        </div>
      </div>
    );
  }
}


export default ValidatorsRunning;
