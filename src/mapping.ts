import {BridgeWithdrawal} from "../generated/schema";
import {WithdrawalInitiated} from "../generated/L2StandardBridge/L2StandardBridge";

export function handleL2BridgeWithdrawlInitiated(event: WithdrawalInitiated): void {
  let bridgeWithdrawl = new BridgeWithdrawal(event.address.toString())
  bridgeWithdrawl.l1Token = event.params.l1Token
  bridgeWithdrawl.l2Token = event.params.l2Token
  bridgeWithdrawl.from = event.params.from
  bridgeWithdrawl.to = event.params.to
  bridgeWithdrawl.amount = event.params.amount
  bridgeWithdrawl.save()
}
