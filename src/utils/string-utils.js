export default function truncate(str, n) {
  return str.length > n ? `${str.substr(3, n - 1)}...` : str;
}
