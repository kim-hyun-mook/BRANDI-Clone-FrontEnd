import { axiosInstance } from "../axiosInstance/axiosInstance"

export const getCategoryProducts = async (categoryName) => {
	try {
		const respeonse = await axiosInstance.get(`/products?categoryName=${categoryName}`)
		return respeonse.data

	} catch (error) {
		console.log(error)
		throw error
	}
}