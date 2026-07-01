const express = require("express");
const router = express.Router();
const app = require("../src/app");
const prisma = require("../config/prisma"); 

router.post("/create-opportunities" , async (req,res)=> {
  try {
  const {Role , Date , Location} = req.body;

  const newOpportunity = await prisma.Opportunities.create({
    data: {
      Role,
      Date,
      Location
    }
  });

return res.status(201).json({
  success:true,
  id : newOpportunity.id
})
  }catch(err) {
    console.log(err);
    res.status(500).json({
      success:false
    })
  }
})

router.get("/opportunities", async (req, res) => {
  const opportunities = await prisma.Opportunities.findMany({
      orderBy: {
          id: "desc"
      }
  });

  res.json(opportunities);
});

router.post("/applications", async (req, res) => {
  try {
      const {
          Name,
          Aadhar,
          College,
          Certificate,
          Resume,
          opportunityId
      } = req.body;

      const id = Number(opportunityId);

      if (isNaN(id)) {
          return res.status(400).json({
              success: false,
              message: "Invalid opportunityId"
          });
      }

      const newApplication = await prisma.application.create({
          data: {
              name: Name,
              Aadhar,
              College,
              Certificate,
              Resume,
              opportunity: {
                  connect: { id }
              }
          }
      });

      return res.json({
          success: true,
          id: newApplication.id
      });

  } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false });
  }
});

router.get("/pending-applications", async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      where: { status: "pending" },
      orderBy: { created_at: "desc" },
      include: {
        opportunity: true 
      }
    });

    res.status(200).json({
      success: true,
      applications
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
});

// Get intern progress
// 

router.patch("/applications/:id/status", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const updatedApplication = await prisma.application.update({
        where: {
            id: Number(id),
        },
        data: {
            status,
        },
    });

    res.json({
        success: true,
        application: updatedApplication,
    });
});

router.get("/applications/:id/status", async (req, res) => {
    const id = Number(req.params.id);

    const application = await prisma.application.findUnique({
        where: {
            id
        }
    });

    if (!application) {
        return res.status(404).json({
            success: false,
            message: "Application not found"
        });
    }

    res.json({
        success: true,
        status: application.status
    });
});
router.post("/:id/offer-letter", (req, res) => {});


router.post("/:id/certificate", (req, res) => {});

module.exports = router;