import { Schema, models, model } from 'mongoose'

const ApplicationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Applicant name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    cv: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  },
)

const ApplicationModel = models.Application || model('Application', ApplicationSchema)

export default ApplicationModel
