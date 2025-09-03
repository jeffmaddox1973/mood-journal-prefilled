
import Purchases from 'react-native-purchases';

export async function getOfferings() {
  const offerings = await Purchases.getOfferings();
  return offerings.current;
}

export async function purchasePackage(pkg: any) {
  const { customerInfo } = await Purchases.purchasePackage(pkg);
  return customerInfo;
}

export function hasPro(customerInfo: any, entitlementId: string): boolean {
  return Boolean(customerInfo?.entitlements?.active?.[entitlementId]);
}
