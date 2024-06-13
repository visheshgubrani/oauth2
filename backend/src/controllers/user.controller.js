import { User } from '../models/user.model.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  console.log(req.body)
  if (!(username && email && password)) {
    throw new ApiError(400, 'All fields are required')
  }

  const checkUser = await User.findOne({
    $or: [{ username }, { email }],
  })

  if (checkUser) {
    throw new ApiError(400, 'User Already Exists')
  }

  const user = await User.create({
    username,
    email,
    password,
  })

  if (!user) {
    throw new ApiError(500, 'Failed to create the user')
  }

  const createdUser = await User.findById(user._id).select('-password')

  return res
    .status(201)
    .json(new ApiResponse(201, 'User Created Successfully', createdUser))
})

export { registerUser }
