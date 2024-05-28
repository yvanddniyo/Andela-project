// export const getFailedEmail = async (req: Request, res: Response) => {
//     const failed = await FailedEmail.findAll()
//     const rs =  res.status(200).json({
//       status: 200,
//       message: "fetched",
//       numberFailedEmail: failed.length,
//       data: failed
//     })
//     return rs;
//   }