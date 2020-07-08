from collections import defaultdict
class Solution:
	def findOrder(self, num, p):

		e = defaultdict(list)
		d = defaultdict(int)

		for b, a in p:
			e[a].append(b)
			d[b] += 1

		res = []
		for i in range(num):
			if not d[i]:
				res.append(i)

		for ele in res:
			for end in e[ele]:
				d[end] -= 1
				if not d[end]:
					res.append(end)

		return (res if len(res) == num else [])
